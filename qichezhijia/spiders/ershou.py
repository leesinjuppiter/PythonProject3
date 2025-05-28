import scrapy


from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy import cmdline
from scrapy.http import HtmlResponse
import re

class ErshouSpider(CrawlSpider):
    name = "ershou"
    allowed_domains = ["www.che168.com"]
    start_urls = ["https://www.che168.com/china/a0_0msdgscncgpi1ltocsp1exx0/"]


    # rules规则,这里定义了一堆规则,要求必须是元祖,或者列表
    rules = (
        Rule(LinkExtractor(restrict_xpaths=('//ul[@class="viewlist_ul"]/li/a',)), callback="parse_item", follow=False),
        Rule(LinkExtractor(restrict_xpaths=('//div[@id="listpagination"]/a',)), follow=True),
    )

    def parse_item(self, response:HtmlResponse):

        item = {}
        item['title'] = response.xpath('//meta[@name="keywords"]/@content').get().split(',')[0].replace(' ', '')
        item['price'] = response.xpath('//title/text()').get().split('_')[1][:-2]
        item['display_mileage'] = response.xpath('//div[@class="all-basic-content fn-clear"]/ul[1]/li[2]/text()').get()
        item['gear']= response.xpath('//div[@class="all-basic-content fn-clear"]/ul[1]/li[5]/text()').get()
        item['location'] = response.xpath('//li[@id="citygroupid"]/text()').get()
        item['trans_num'] = response.xpath('//div[@class="all-basic-content fn-clear"]/ul[2]/li[5]/text()').get()[:2]

        item['company'] = response.xpath('//div[@class="protarit-list"]//span/text()').get()
        item['company_id'] = re.search(r'pvareaid=(\d+)', response.url).group(1)
        item['company_address'] = response.xpath('//div[@class="protarit-list"]//div[@class="protarit-adress"]/text()').get()
        yield item

if __name__ == '__main__':
    cmdline.execute("scrapy crawl ershou".split())