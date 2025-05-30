from typing import Iterable, Any

import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse
import re
class NewSpider(scrapy.Spider):
    name = "New"
    allowed_domains = ["news.cn"]
    # start_urls = ["https://www.news.cn"]
    async def start(self):
        urls = [
            "https://www.news.cn/world/ds_8d5294ed513c4779af6242a3623aa27b.json",
            "https://www.news.cn/politics/ds_a6d618872de143bdafa2556915a7ae12.json",
            "https://www.news.cn/fortune/ds_b53aac3e4e6342f699a9e2acdd0ee8fd.json",
            "https://www.news.cn/comments/ds_8e0f870f8f8b4643a239608debe7f2ee.json",
            "https://www.news.cn/gangao/ds_9621c5568c24457f842f378314ce3851.json",
            "https://www.news.cn/tw/ds_05dcf250e0d54af8b8d31f054d4b0fbc.json",
            "https://www.news.cn/sikepro/ds_a5166874b34143b3a5250806cdc9c08b.json",
            "https://education.news.cn/jsxw/ds_77e3127797e049bb8005edd395856264.json",
            "https://www.news.cn/tech/ds_fd79514d92f34849bc8baef7ce3d5aae.json",
            "https://www.news.cn/sports/ds_ea56bba0c6624a7c8f7c1774dc81010f.json",
            "https://www.news.cn/culture//ds_02a3b7de78af4e86a98abfe6d2427afe.json",
            "https://www.news.cn/health/ds_4c7c245375274bc49c8528bd3d2a0ce1.json",
            "https://www.news.cn/money/ds_a173cf19d87f46628a27f41488844d92.json",
            "https://www.news.cn/food/ds_b6671de69cd1451798638eca1399f298.json",
            "https://www.news.cn/house/ds_ae1f7b9d03624853bc927f6c216be3b3.json",
            "https://www.news.cn/info/ds_ecad31336b7843e8b8057a4f607db36a.json",
            "https://xczx.news.cn/ds_e17ed2f46f414070bb2cabc0bdbf087a.json",
            "https://www.news.cn/info/xbsyzg/ds_c94ee6718a1e450d87bd8571008d1d28.json",
            "https://www.news.cn/ci//ds_16b5dd7eb0f8488cb694c118b8301d71.json",
            "https://www.news.cn/book/ds_44f3d019403e4e69929e5a047985837e.json",
            "https://www.news.cn/gongyi/ds_ef3e064c022b4e1389eaaf94440492a5.json",
            "https://www.news.cn/fashion/ds_6118c133b0d54ab5819141b0215b321f.json",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)


    def parse(self, response:HtmlResponse,**kwargs):
        # print(response.json())
        urls_data = response.json()
        for urls in urls_data["datasource"]:
            url = urls["publishUrl"]
            if "index.htm" in url:
                return
            if not "http" in url:
                url = "https://www.news.cn" + url
            categoryId = urls["categoryId"]
            keywords = urls["keywords"] if urls["keywords"] in urls else "空"
            title = urls["title"]
            if "<a href" in title:
                title = re.findall(r'>(.*?)<', urls["title"], re.DOTALL)[0]
            else:
                title = title
            summary = urls["summary"] if urls["summary"] in urls else "空"
            publishTime = urls["publishTime"]
            contentId = urls["contentId"]

            yield {
                "type":"info",
                "categoryId":categoryId,
                "keywords":keywords,
                "title":title,
                "summary":summary,
                "publishTime":publishTime,
                "url":url,
                "contentId":contentId
            }
            yield scrapy.Request(url=url, callback=self.parse_url)


    def parse_url(self, response:HtmlResponse,**kwargs):

        date = response.xpath('//meta[@name="publishdate"]/@content').get()
        title = response.xpath('//title/text()').get().replace(' ', '')
        content = "".join(response.css('#detailContent p::text').getall()).strip()
        source = response.xpath('//div[@class="source"]/text()').get()
        contentId = response.xpath('//meta[@name="contentid"]/@content').get()
        yield {
            "type":"content",
            "data":date,
            "title":title ,
            "content":content,
            "source":source,
            "contentId":contentId
        }

if __name__ == '__main__':
    cmdline.execute("scrapy crawl New".split())