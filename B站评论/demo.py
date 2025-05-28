import json
import time
import hashlib
import requests


class Spider(object):

    def __init__(self):
        self.url = "https://api.bilibili.com/x/v2/reply/wbi/main?"
        self.headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }
    def parse_start_url(self):
        while True:
            time_tem = int(time.time())
            params = f'mode=3&oid=1750208116&pagination_str=%7B%22offset%22%3A%22CAESEDE3OTAzNTIwOTg3Mzc1MzkiAggB%22%7D&plat=1&type=1&web_location=1315875&wts={time_tem}'
            rid = f"&w_rid={hashlib.md5(f'{params}ea1db124af3c7062474693fa704f4ff8'.encode()).hexdigest()}"
            response = requests.get(url=self.url+params+rid,headers=self.headers).json()
            self.parse_response_data(response)

    def parse_response_data(self,response):

        replies = response['data']['replies']
        for i in replies:
            item = {}
            item['name'] = i['member']['uname']
            item['creat_time'] = i['ctime']
            item['content'] = i['content']['message']
            print(item)

if __name__ == '__main__':
    s = Spider()
    s.parse_start_url()
