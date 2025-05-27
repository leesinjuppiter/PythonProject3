from DrissionPage import ChromiumPage
from DrissionPage.common import Actions

import time,base64
import requests
user = ''
pwd = ''

class Spider(object):

    def __init__(self):

        self.url = "https://passport.bilibili.com/login"
        self.page = ChromiumPage()
        self.ym = "http://api.jfbym.com/api/YmServer/customApi"


    def parse_start_url(self):
        self.page.get(self.url)
        self.page.ele('xpath://*[@id="app-main"]/div/div[2]/div[3]/div[2]/div[1]/div[1]/input').input(user)
        self.page.ele('xpath://*[@id="app-main"]/div/div[2]/div[3]/div[2]/div[1]/div[3]/input').input(pwd)
        self.page.ele('xpath://*[@id="app-main"]/div/div[2]/div[3]/div[2]/div[2]/div[2]').click()
        time.sleep(1)
        self.page.ele('xpath:/html/body/div[4]/div[2]/div[6]/div/div').get_screenshot('yzm.png')
        self.parse_three_data()
    def parse_three_data(self):
        with open('yzm.png', 'rb') as f:
            b = base64.b64encode(f.read()).decode()
        data = {
            ## 关于参数,一般来说有3个;不同类型id可能有不同的参数个数和参数名,找客服获取
            "token": "C2rZrKhtQpl_SWNOn0SBz4lbKoE9a76EaTwO_J9xdUI",
            "type": "30009",
            "image": b,
        }
        _headers = {
            "Content-Type": "application/json"
        }
        response = requests.post(self.ym, headers=_headers, json=data).json()
        print(response)
        data =  response['data']['data']

        self.parse_click_huakuai(data)
    def parse_click_huakuai(self,data):
        code = self.page.ele('xpath:/html/body/div[4]/div[2]/div[6]/div/div')
        ac = Actions(self.page)

        for i in data.split('|'):
            x = int(i.split(',')[0])
            y = int(i.split(',')[1])
            ac.move_to(ele_or_loc=code, offset_x = 0, offset_y = 0).move(x, y).click()
        self.page.ele('xpath:/html/body/div[4]/div[2]/div[6]/div/div/div[3]/a/div').click()




if __name__ == '__main__':
    spider = Spider()
    spider.parse_start_url()
