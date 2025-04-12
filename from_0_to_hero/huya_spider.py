#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2025/4/11 04:24
# @Author  : LeeSw
#爬取虎牙直播间信息,非常简单,直接请求接口
from http.client import responses
import pymongo
import requests
import random
from tqdm import tqdm  # 导入 tqdm 库
from flask_pymongo import MongoClient

import time


class Huya(object):
    def __init__(self):
        self.headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Origin": "https://www.huya.com",
            "Referer": "https://www.huya.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }
        self.url = 'https://live.huya.com/liveHttpUI/getLiveList?iGid=0&iPageNo={}&iPageSize=120'
        self.client = MongoClient('mongodb://localhost:27017/')  # 初始化 MongoDB 连接
        self.collection = self.client['huya']['live_data']  # 指定集合

    def url_list(self):
        for i in range(1, 100):
            yield self.url.format(i)

    def get_data(self):
        for i in tqdm(self.url_list(), desc="Processing Pages"):  # 添加进度条
            self.awit_time()
            try:
                response = requests.get(i, headers=self.headers)
                response.raise_for_status()  # 检查请求是否成功
                data = response.json()
                vList = data.get('vList', [])
                if not vList:  # 如果 vList 为空
                    print("没有数据，程序结束")
                    return  # 结束当前方法
                for item in tqdm(vList, desc="Processing Items", leave=False):  # 嵌套进度条
                    self.process_item(item)
            except requests.exceptions.RequestException as e:
                print(f"请求失败: {e}")
            except Exception as e:
                print(f"处理数据时出错: {e}")

    def process_item(self, item):
        category = item.get('sGameFullName')
        name = item.get('sNick')
        title = item.get('sIntroduction')
        audience = item.get('lUserCount')
        data = {
            "种类": category,
            "主播": name,
            "标题": title,
            "观众人数": audience,
        }
        self.save_data(data)

    def save_data(self, data):
        if isinstance(data, dict):
            try:
                self.collection.insert_one(data)  # 插入数据
            except Exception as e:
                print(f"保存数据时出错: {e}")
        else:
            print("数据格式错误")

    def awit_time(self):
        time.sleep(random.randint(100, 300) / 1000)


if __name__ == '__main__':
    ss = Huya()
    ss.get_data()
