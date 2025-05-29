import requests
import json
import execjs

class YouDaoTranslate(object):

    def __init__(self):
        self.url = "https://dict.youdao.com/webtranslate"
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }
        self.data = {
            "i": "dirty",
            "from": "en",
            "to": "zh-CHS",
            "useTerm": "false",
            "domain": "0",
            "dictResult": "true",
            "keyid": "webfanyi",

            "client": "fanyideskweb",
            "product": "webfanyi",
            "appVersion": "1.0.0",
            "vendor": "web",
            "pointParam": "client,mysticTime,product",

            "keyfrom": "fanyi.web",
            "mid": "1",
            "screen": "1",
            "model": "1",
            "network": "wifi",
            "abtest": "0",
            "yduuid": "abcdefg"
        }
        self.js = execjs.compile(open("有道翻译.js", encoding="utf-8").read())
    def translate(self):
        # self.data["i"] = str(input("请输入要翻译的内容："))
        js_data = self.js.call("get_sign")
        self.data['sign'] = js_data['sign']
        self.data['mysticTime'] = js_data['mysticTime']
        response = requests.post(url=self.url, headers=self.headers, data=self.data)
        print(response.content)

if __name__ == '__main__':
    youdao = YouDaoTranslate()
    youdao.translate()

