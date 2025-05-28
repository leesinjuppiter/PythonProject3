# import scrapy
# from scrapy.http import HtmlResponse
# from scrapy import cmdline
# from scrapy.linkextractors import LinkExtractor
#
#
# class ErshoucheSpider(scrapy.Spider):
#     name = "ershouche"
#     allowed_domains = ["www.che168.com"]
#     start_urls = ["https://www.che168.com/china/a0_0msdgscncgpi1ltocsp1exx0/"]
#
#     def parse(self, response:HtmlResponse,**kwargs):
#         # print(response.encoding)
#         # print(response.text)
#         hrefs = response.xpath('//ul[@class="viewlist_ul"]/li/a/@href').extract()
#         for href in hrefs:
#             yield scrapy.Request(url=response.urljoin(href),callback=self.parse_detail)
#         link = LinkExtractor(restrict_xpaths=('//ul[@class="viewlist_ul"]/li/a',))
#         links = link.extract_links(response)
#         # for link in links:
#         #     yield scrapy.Request(url=link.url,callback=self.parse_detail)
#     #     开始分页，递归
#         print(response.url)
#         page_links = LinkExtractor(restrict_xpaths=('//div[@id="listpagination"]/a',))
#         page_links = page_links.extract_links(response)
#         for page_link in page_links:
#             # scrapy自动去重
#             yield scrapy.Request(url=page_link.url,callback=self.parse)
#
#
#
#
#
#
#     def parse_detail(self,response:HtmlResponse,**kwargs):
#         pass
#
#
#
# if __name__ == '__main__':
#     cmdline.execute("scrapy crawl ershouche".split())