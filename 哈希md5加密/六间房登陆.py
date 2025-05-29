import requests, json, execjs, time


class LJFlogin(object):
    def __init__(self):
        self.login_url = "https://passport.6.cn/sso/prelogin.php"
        self.url = "https://passport.6.cn/sso/login.php"
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }
        self.username = 13993715593
        self.password = 123456
        self.js = execjs.compile(open("六间房登陆.js", encoding="utf-8").read())

    def get_server_data(self):
        params = {
            "username": self.username,
            "domain": "v.6.cn",
            "c": "1",
            "_": str(int(time.time() * 1000))
        }
        serverdata = dict()
        response = requests.get(url=self.login_url, params=params, headers=self.headers).text.replace('itcmhg1t(',
                                                                                                      '').replace(')',
                                                                                                                  '')
        serverdata['servertime'] = json.loads(response)['servertime']
        serverdata['nonce'] = json.loads(response)['nonce']
        return serverdata

    def login(self):
        server_data = self.get_server_data()
        params = {
            "username": self.username,
            "domain": "v.6.cn"
        }
        data = {
            "partner": "",
            "password": self.js.call("get_pwd", self.password, server_data['servertime'], server_data['nonce']),
            "savestate": "1",
            "servertime": server_data['servertime'],
            "nonce": server_data['nonce'],
            "prod": "10004",
            "url": "//v.6.cn/login_test.php",
            "encoding": "utf-8",
            "domain": "v.6.cn",
            "callback": "parent.SSOController.feedBackUrlCallBack",
            "p1": "v.6.cn/channel/index.php",
            "p3": "%2C%2C%2Fchannel%2Findex.php%2Ctop_login%2C%2Cindex%2C1746710394952%2Cweb%2CB2174671007355926%2C0%2C1.5%2C%2C%2C",
            "c": "0",
            "deviceId": "WHJMrwNw1k%2FH9cWL5tWhIQF6ylexT1DM%2BMSTIMuWxyLL7%2B8G%2BcOA%2Fv9Ga8a6iLUeJaOL8n3C4g0k%2F5udBDYpcSzJ43H5QKHsudCW1tldyDzmQI99%2BchXEigpV066je1UCXNc4EB7%2BKuGUg9xJj23DdW9hl4GeQEFSX%2B1uSMY9k5z%2F2tt3aq7gZ%2FZCS5qIo4VXbQugUeDNJoYXb5%2ByucJj3Po68u%2B9D19PYjVQnMOcsCjgoOsoQ5fS2FfUAswnO0FApFGd49cL%2FkKHJygQDM9d%2FnuevOYZhBE71487582755342"
        }
        response = requests.post(url=self.url, params=params, data=data, headers=self.headers)
        print(response)
        print(response.text)



if __name__ == '__main__':
    ljf = LJFlogin()
    ljf.login()
