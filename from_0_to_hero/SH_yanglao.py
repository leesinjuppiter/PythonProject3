from http.client import responses
import requests
import json
import csv
import os


class SH_Spider(object):

    def __init__(self):
        self.headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Origin": "https://shyl.mzj.sh.gov.cn",
            "Referer": "https://shyl.mzj.sh.gov.cn/agencyQuery",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }

        self.cookies = {
            "Hm_lvt_5ae293b25bd2a02fef4384350c8ba94c": "1744868245",
            "HMACCOUNT": "FDD07EF1714E13B2",
            "arialoadData": "true",
            "ariawapChangeViewPort": "false",
            "Domain": "shyl.mzj.sh.gov.cn",
            "Hm_lpvt_5ae293b25bd2a02fef4384350c8ba94c": "1744869332",
            "ariauseGraymode": "false"
        }
        self.url = "https://shyl.mzj.sh.gov.cn/biz/ins/v1/getList"

        # 初始化文件写入器
        self.file = open("data.csv", "a", newline='', encoding='utf-8')
        self.writer = csv.DictWriter(self.file, fieldnames=['name', 'telephone', 'address', 'addressDistrict'])
        if os.stat("data.csv").st_size == 0:
            self.writer.writeheader()

    def get_lists(self, page):
        try:
            response = requests.post(self.url, headers=self.headers, cookies=self.cookies, data=self.get_data(page))
            response.raise_for_status()  # 检查请求是否成功
            lists = response.json()["data"]["list"]
            for list in lists:
                item = dict()
                item['name'] = list["name"]
                try:
                    item['telephone'] = list['telephone']
                except KeyError:
                    item['telephone'] = "暂无"
                item['address'] = list['address']
                item['addressDistrict'] = list['addressDistrict']
                self.save_data(item)
        except requests.exceptions.RequestException as e:
            print(f"请求失败: {e}")

    def get_data(self, page):
        data = {
            "keyword": "",
            "pageSize": 12,
            "pageNo": page
        }
        data = json.dumps(data, separators=(',', ':'))
        return data

    def save_data(self, item):
        self.writer.writerow(item)

    def run(self, start_page=1, end_page=2):
        for i in range(start_page, end_page + 1):
            self.get_lists(i)

    def __del__(self):
        self.file.close()


if __name__ == '__main__':
    s = SH_Spider()
    s.run()
