#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2025/4/11 16:13
# @Author  : LeeSw
import requests
from lxml import etree
import time
import os
from multiprocessing import Process, Queue
from concurrent.futures import ThreadPoolExecutor
from tqdm import tqdm  # 引入tqdm库

def get_imag_url(q):
    for page in range(1, 731):
        url = f"https://www.doutupk.com/article/list/?page={page}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
        }
        try:
            res = requests.get(url, headers=headers)
            res.raise_for_status()
            tree = etree.HTML(res.text)
            imag_urls = tree.xpath('//div[@class="random_article"]//img//@data-original')
            for imag_url in imag_urls:
                q.put(imag_url)
            print(f"第{page}页下载完成")
        except requests.exceptions.RequestException as e:
            print(f"第{page}页请求失败: {e}")
    q.put("DONE")

def imag_process(q):
    with ThreadPoolExecutor(10) as t:
        while True:
            imag_url = q.get()
            if imag_url == "DONE":
                break
            t.submit(download_imag, imag_url)
        t.shutdown(wait=True)

def download_imag(imag_url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    }
    try:
        resp = requests.get(imag_url, headers=headers)
        resp.raise_for_status()
        file_name = imag_url.split('/')[-1]
        if not os.path.exists("./imags/"):
            os.makedirs("./imags/")
        with open(f"./imags/{file_name}", 'wb') as f:
            f.write(resp.content)
    except (requests.exceptions.RequestException, IOError) as e:
        print(f"下载失败: {imag_url}, 错误: {e}")

if __name__ == '__main__':
    s1 = time.time()
    q = Queue(maxsize=1000)  # 设置队列最大大小
    p1 = Process(target=get_imag_url, args=(q,))
    p2 = Process(target=imag_process, args=(q,))
    p1.start()
    p2.start()
    p1.join()
    p2.join()
    s2 = time.time()
    print(f"总耗时: {s2 - s1}秒")
