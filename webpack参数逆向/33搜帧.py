import requests, execjs, json


class Souzhen(object):

    def __init__(self):
        self.url = "https://fse-api.agilestudio.cn/api/search"
        self.headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Connection": "keep-alive",
            "Origin": "https://fse.agilestudio.cn",
            "Prefer": "safe",
            "Referer": "https://fse.agilestudio.cn/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0",
            # "X-Signature": "e17011b21a60e2aac308ec14ee3861cf",

        }
        self.js = execjs.compile(open("33搜帧.js", encoding="utf-8").read())
        self.content =  "火车呼啸而过"

    def get_data(self,page):
        js_data = self.js.call("get_info",page)
        self.headers["X-Signature"] = js_data['signature']
        params = {
            "keyword": self.content,
            "page": page,
            "limit": "12",
            "_platform": "web",
            "_versioin": "0.2.5",
            "_ts": js_data['_ts']
        }
        response = requests.get(self.url, headers=self.headers, params=params).json()
        print(response)

if __name__ == '__main__':
    sz = Souzhen()
    sz.get_data(1)

