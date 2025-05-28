# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymysql


class QichezhijiaPipeline:
    def open_spider(self, spider):
        if spider.name == "ershou":
            # 线上测试数据库
           
            self.db = pymysql.connect(host='localhost', user='root', password='123456', database='python', charset='utf8mb4')
            self.cursor = self.db.cursor()
            sql = """
                  CREATE TABLE IF NOT EXISTS car_info
                  (
                      id              int primary key auto_increment not null,
                      title           VARCHAR(255)                   NOT NULL,
                      price           VARCHAR(255)                   NOT NULL,
                      display_mileage VARCHAR(255)                   NOT NULL,
                      gear            VARCHAR(255)                   NOT NULL,
                      trans_num       VARCHAR(255),
                      company         VARCHAR(255)                   NOT NULL,
                      company_id      VARCHAR(255)                   NOT NULL,
                      company_address VARCHAR(255)                   NOT NULL

                  ); 
                  """
            try:
                self.cursor.execute(sql)
                print('数据表创建成功...')
            except Exception as e:
                print('数据表已存在...', e)


    def process_item(self, item, spider):
        if spider.name == "ershou":
            sql = """INSERT INTO car_info(id, title, price, display_mileage, gear,trans_num,company,company_id,company_address) 
            values (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            
            """
            try:
                self.cursor.execute(sql, (0, item['title'], item['price'], item['display_mileage'], item['gear'], item['trans_num'], item['company'], item['company_id'], item['company_address']))
                self.db.commit()
                print('数据写入成功...')
            except Exception as e:
                print('数据写入失败...', e)
                self.db.rollback()

        return item
    def close_spider(self, spider):
        self.cursor.close()
        self.db.close()
