
import requests
import execjs

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://q.10jqka.com.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",

}
cookies = {
    "u_ukey": "A10702B8689642C6BE607730E11E6E4A",
    "u_uver": "1.0.0",
    "u_dpass": "DpcoH5z%2F2eqwQGu2H%2FsueqOCeDeIt5NFPOL5kOCBEICnaAtRhvYH09gFxEdKulJLHi80LrSsTFH9a%2B6rtRvqGg%3D%3D",
    "u_did": "4573E35F58B147BB8288A9B1318DE37F",
    "u_ttype": "WEB",
}
url = "https://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/3/ajax/1/"
js_code = execjs.compile(open('demo.js', encoding='utf-8').read())
js_data = js_code.call('get_cookie_v')
cookies['v'] = js_data
response = requests.get(url, headers=headers, cookies=cookies)
print(response.text)
print(response)