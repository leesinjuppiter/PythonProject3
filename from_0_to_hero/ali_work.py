#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2025/4/13 09:16
# @Author  : LeeSw
# 爬取阿里工作信息
import pymysql
import requests


class AliWork(object):
    def __init__(self):
        self.db = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='123789456',
            db='lllsw',
            charset='utf8'
        )
        self.cursor = self.db.cursor()
        self.api_url = 'https://talent.taotian.com/position/search?_csrf=d1691ad1-adc6-4316-867a-47862725802f'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'Cookie': 'XSRF-TOKEN=d1691ad1-adc6-4316-867a-47862725802f; SESSION=QjMzREM1OUZEMEQ1ODc3NjRDNTg5REQ0RUYzNzY0Mzk=; cna=FP+BIFU/GXUCAbfsXrUd0Xge; xlly_s=1; prefered-lang=zh; isg=BFhY9_jCi8DcXqdEU15G06QPKYbqQbzLhiUeJ5JI7hNyLfkXOlJSWgVOZWUdO3Sj; tfstk=go3ExXA53eLeth0eE54P0zYmWF4Lyyvf-4w7ZbcuOJ23FHdPzAl0qatLR7YrFAZoRyGIQYkqhk0BvXGlrb2TFJwIA7YrIAZ3PDwQZ63Z3a_BpHhlzzakhKTXlXFLyzvjYvRGO9FQT8Y7K72gJ7Mo3MmWlXhds6WkGcYfUBqPJb2oEkqGS7wgZwboENbgB7FlK7bH_f2TI72utuXgjWF7EMDurClgB7S3rkcuHuqV77EHNmXak5_hskemtR7lusFUxOGCVa7ykWE3nkw5rkuaTkymt2NLLqVi5Vrbf_9USjnsK5z28tFEjjz3a4dc48rrJPPoLEC4I2lr7kn1GZca4Joi-l5lrX4uKuirLpSLKDMaD5qGaEFshRcK-cRRIXDbLyVgfEAqsumsJo3BIwzmDXaIqxv1AJm4ZguOe5AHd4nFEgr365yX_ClK2nixiTpehgI8AOFahBAh2gE365yX_CSR2ktY_-OHt',
            'Referer': 'https://talent.taotian.com/off-campus/position-list?lang=zh&search='
        }
    def __del__(self):
        self.cursor.close()
        self.db.close()

    def get_work_info(self):
        for page in range(1, 11):
            json_data = {
                "channel": "group_official_site", "language": "zh", "batchId": "", "categories": "", "deptCodes": [],
                "key": "", "pageIndex": page, "pageSize": 10, "regions": "", "subCategories": "", "shareType": "",
                "shareId": "", "myReferralShareCode": ""}
            response = requests.post(self.api_url, headers=self.headers, json=json_data).json()

            yield response['content']['datas']

    def parse_work_info(self, response_generator):
        for work_info_list in response_generator:
            for work_info in work_info_list:
                item = dict()
                item['categories'] = work_info['categories'] if work_info['categories'] else '空'
                item['work_name'] = work_info['name']
                item['description'] = work_info['description']
                self.save_work_info(0, item['categories'], item['work_name'], item['description'])

    def creat_table(self):
        sql = """
            CREATE TABLE IF NOT EXISTS ali_work(
                id INT  PRIMARY KEY AUTO_INCREMENT,
                categories VARCHAR(50),
                work_name VARCHAR(50),
                description TEXT
            );
        """
        try:
            self.cursor.execute(sql)
            print("建表成功")
        except Exception as e:
            print("建表失败", e)

    def save_work_info(self, *args):
        sql = """
            insert into ali_work() values (%s,%s,%s,%s);
            """
        try:
            self.cursor.execute(sql, args)
            self.db.commit()
            print("保存成功")
        except Exception as e:
            print("保存失败", e)
            self.db.rollback()


    def main(self):
        self.creat_table()
        response_generator = self.get_work_info()
        self.parse_work_info(response_generator)


if __name__ == '__main__':
    ali_work = AliWork()
    ali_work.main()
