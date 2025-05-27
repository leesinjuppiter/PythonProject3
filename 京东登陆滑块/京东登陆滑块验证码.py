from DrissionPage.common import Actions
from DrissionPage import ChromiumPage

import time, base64
import requests
import pyautogui
user_info = {
    'user': '用户名',
    'pwd': '密码'
}
class Spider(object):

    def __init__(self):
        self.url = "https://passport.jd.com/new/login.aspx"
        self.page = ChromiumPage()
        self.page.clear_cache()
        self.ym = "http://api.jfbym.com/api/YmServer/customApi"

    def parse_start_url(self):
        self.page.get(self.url)
        """定位账号和密码的输入,执行登陆"""
        self.page.ele('xpath://input[@id="loginname"]').input(user_info['user'])
        self.page.ele('xpath://input[@type="password"]').input(user_info['pwd'])
        self.page.ele('xpath://*[@id="loginsubmit"]').click()
        """定位验证码"""
        # time.sleep(1)

        """对接第三方函数方法"""
        # self.parse_out_code()
    def save_image(self):

        img = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[1]/div[2]/div[1]/img')
        img.get_screenshot('yzm.png')
    def parse_out_code(self):
        with open('yzm.png', 'rb') as f:
            b = base64.b64encode(f.read()).decode()
        data = {
            ## 关于参数,一般来说有3个;不同类型id可能有不同的参数个数和参数名,找客服获取
            "token": "C2rZrKhtQpl_SWNOn0SBz4lbKoE9a76EaTwO_J9xdUI",
            "type": "22222",
            "image": b,
        }
        _headers = {
            "Content-Type": "application/json"
        }
        response = requests.post(self.ym, headers=_headers, json=data).json()
        num = response['data']['data']
        return num
        # self.parse_huakuai_code(num)

    def parse_huakuai_code(self,num):
        """处理验证码滑动函数方法"""
        # #创建鼠标动作链
        ac = Actions(self.page)
        #定位滑块
        # while True:
        button = self.page.ele('xpath://*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[2]/div[3]')
        ac.move_to(button)
        ac.hold(button)
        ac.move(int(num)+1)
        ac.release()


    def run(self):

        self.parse_start_url()
        self.save_image()
        yam_num = self.parse_out_code()
        self.parse_huakuai_code(yam_num)


if __name__ == '__main__':
    s = Spider()
    s.run()
