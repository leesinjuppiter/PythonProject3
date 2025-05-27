from DrissionPage import ChromiumPage
from DrissionPage.common import Actions
import time,base64
import requests

user_info = {
    'user': '用户名',
    'pwd': '密码'
}
class Spider(object):

    def __init__(self):
        self.url = "https://www.douban.com/"
        self.page = ChromiumPage()
        self.ym = "http://api.jfbym.com/api/YmServer/customApi"

    def parse_start_url(self):
        self.page.get(self.url)
        iframe = self.page.ele('xpath://*[@id="anony-reg-new"]/div/div[1]/iframe')
        iframe.ele('xpath://ul[@class="tab-start"]/li[2]').click()
        iframe.ele('xpath://input[@id="username"]').input(user_info['user'])
        iframe.ele('xpath://input[@id="password"]').input(user_info['pwd'])
        iframe.ele('xpath://div/a[@class="btn btn-account btn-active"]').click()
        #切换到iframe内部的iframe
        time.sleep(1)
        iframe2 = iframe.ele('xpath://iframe[@id="tcaptcha_iframe_dy"]')
        iframe2.ele('xpath://div[@id="slideBgWrap"]/div').get_screenshot('yzm.png')
        # return iframe2
        self.parse_three_data(iframe2)

    def parse_three_data(self,iframe2):
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
        num = int(response['data']['data'])

        # self.parse_huakuai_code(num)
        ac = Actions(iframe2)
        button = iframe2.ele('xpath://div[@class="tc-fg-item tc-slider-normal"]')
        ac.move_to(button).hold().move(num).release()






if __name__ == '__main__':
    s = Spider()

    s.parse_start_url()