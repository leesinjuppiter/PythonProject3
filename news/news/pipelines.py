# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

import pymongo


class NewsPipeline:



    def open_spider(self, spider):

        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017)

        self.info_collection = self.mongo_client['scrapy']['news_info']
        self.content_collection = self.mongo_client['scrapy']['news_content']
        print("MongoDB 连接成功!")

    def process_item(self, item, spider):
        type_ = item.get("type")
        if type_ == 'info':
            self.info_collection.insert_one(item)
            print('info数据保存成功', item)
        elif type_ == 'content':
            self.content_collection.insert_one(item)
            print('content数据保存成功', item)
        return item




