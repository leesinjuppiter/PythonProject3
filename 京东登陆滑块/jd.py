from DrissionPage.common import Actions
from DrissionPage import ChromiumPage
from user_info import user_info
import time
import base64
import requests
import random
import logging

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class Spider(object):
    MAX_RETRIES = 5  # 最大重试次数
    RETRY_DELAY = (1, 3)  # 重试延迟范围(秒)

    def __init__(self):
        self.url = "https://passport.jd.com/new/login.aspx"
        self.page = ChromiumPage()
        self.page.clear_cache()
        self.ym = "http://api.jfbym.com/api/YmServer/customApi"
        self.retry_count = 0

    def parse_start_url(self):
        """访问登录页面并尝试登录"""
        try:
            self.page.get(self.url)
            logger.info("成功访问登录页面")

            # 输入账号密码
            self.page.ele('xpath://input[@id="loginname"]').input(user_info['user'])
            self.page.ele('xpath://input[@type="password"]').input(user_info['pwd'])
            self.page.ele('xpath://*[@id="loginsubmit"]').click()
            logger.info("已提交登录表单")

            # 处理验证码
            time.sleep(1)
            self._handle_captcha()

        except Exception as e:
            logger.error(f"登录过程发生异常: {str(e)}")
            self._cleanup()

    def _handle_captcha(self):
        """处理验证码逻辑，只重试滑块验证"""
        # 首次获取验证码
        img = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[1]/div[2]/div[1]/img')
        img.get_screenshot('yzm.png')
        logger.info(f"已获取验证码图片，开始验证")

        while self.retry_count < self.MAX_RETRIES:
            try:
                # 调用第三方识别
                code = self.parse_out_code()

                # 处理滑块验证
                self.parse_huakuai_code(code)

                # 验证是否登录成功
                if self._check_login_success():
                    logger.info("登录成功！")
                    return True
                else:
                    # 检查是否需要刷新验证码
                    if self._need_refresh_captcha():
                        logger.info("需要刷新验证码")
                        self._refresh_captcha()

                    self.retry_count += 1
                    delay = random.uniform(*self.RETRY_DELAY)
                    logger.warning(f"第{self.retry_count}次滑块验证失败，{delay:.2f}秒后重试")
                    time.sleep(delay)

            except Exception as e:
                self.retry_count += 1
                delay = random.uniform(*self.RETRY_DELAY)
                logger.error(f"第{self.retry_count}次尝试出错: {str(e)}，{delay:.2f}秒后重试")
                time.sleep(delay)

                # 检查是否需要刷新验证码
                if self._need_refresh_captcha():
                    logger.info("需要刷新验证码")
                    self._refresh_captcha()

        logger.error(f"达到最大重试次数({self.MAX_RETRIES})，登录失败")
        self._cleanup()
        return False

    def parse_out_code(self):
        """调用第三方API识别验证码"""
        try:
            with open('yzm.png', 'rb') as f:
                b = base64.b64encode(f.read()).decode()

            data = {
                "token": "C2rZrKhtQpl_SWNOn0SBz4lbKoE9a76EaTwO_J9xdUI",
                "type": "22222",
                "image": b,
            }

            headers = {
                "Content-Type": "application/json"
            }

            response = requests.post(self.ym, headers=headers, json=data).json()

            # 检查API响应
            if response['msg']=='识别成功':
                return response['data']['data']
            else:
                raise Exception(f"验证码识别API返回异常: {response}")

        except Exception as e:
            logger.error(f"验证码识别过程出错: {str(e)}")
            raise

    def parse_huakuai_code(self, num):
        """处理滑块验证码"""
        try:
            # 创建鼠标动作链
            ac = Actions(self.page)

            # 定位滑块
            button = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[2]/div[3]')

            # 添加随机移动轨迹，模拟人类操作
            ac.move_to(button)
            ac.hold(button)

            # 使用随机分段移动，模拟人类操作
            total_distance = int(num) + 1
            steps = random.randint(5, 10)
            for _ in range(steps):
                step = random.randint(1, max(1, total_distance // (steps - _)))
                ac.move(step)
                time.sleep(random.uniform(0.05, 0.15))
                total_distance -= step
                if total_distance <= 0:
                    break

            # 处理剩余距离
            if total_distance > 0:
                ac.move(total_distance)

            # 添加随机抖动
            for _ in range(random.randint(1, 3)):
                direction = 1 if random.random() > 0.5 else -1
                ac.move(direction * random.randint(1, 3))

            # 释放滑块，添加随机延迟
            time.sleep(random.uniform(0.2, 0.5))
            ac.release()

            # 等待验证结果加载
            time.sleep(random.uniform(1, 2))

        except Exception as e:
            logger.error(f"滑块处理过程出错: {str(e)}")
            raise

    def _check_login_success(self):
        """检查是否登录成功"""
        try:
            # 通过检查是否存在登录成功后才有的元素来判断
            # 这里需要根据京东实际页面结构调整选择器
            self.page.ele('拼接成功', timeout=3)
            return True
        except:
            return False

    # def _need_refresh_captcha(self):
    #     """检查是否需要刷新验证码"""
    #     try:
    #         # 判断是否出现验证码错误提示
    #         # 需要根据京东实际页面结构调整选择器
    #         self.page.ele('xpath://div[contains(text(), "验证码错误")]', timeout=1)
    #         return True
    #     except:
    #         return False

    def _refresh_captcha(self):
        """刷新验证码"""
        try:
            # 点击刷新按钮
            refresh_btn = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[1]/div[1]/div[2]')
            refresh_btn.click()
            time.sleep(1)

            # 重新截图验证码
            img = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[1]/div[2]/div[1]/img')
            img.get_screenshot('yzm.png')
        except Exception as e:
            logger.error(f"刷新验证码出错: {str(e)}")
            # 发生错误时尝试刷新整个页面
            self.page.refresh()
            time.sleep(2)

    def _cleanup(self):
        """清理资源"""
        try:
            self.page.quit()
            logger.info("已关闭浏览器")
        except:
            pass


if __name__ == '__main__':
    s = Spider()
    s.parse_start_url()