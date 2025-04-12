#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2025/4/12 03:10
# @Author  : LeeSw
# @File    : novel.py
import asyncio
import requests
from lxml import etree
import os
import aiohttp
import aiofiles

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
def get_chaptor_info(url):

    try:
        response = requests.get(url=url, headers=headers)
        response.raise_for_status()  # 检查请求是否成功
        response.encoding = "utf-8"
        page_source = response.text

        tree = etree.HTML(page_source)
        results = []
        divs = tree.xpath('//div[@class="mulu"]//table//tr/td')
        for div in divs:
            chapter_name = div.xpath("./a/text()")
            if len(chapter_name) == 0:
                continue
            chapter_name = chapter_name[0].strip().replace(" ", "_")
            chapter_url = div.xpath("./a/@href")
            if len(chapter_url) == 0:
                continue
            chapter_url = chapter_url[0]
            dic = {
                "chapter_name": chapter_name,
                "chapter_url": chapter_url
            }
            results.append(dic)
        return results
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

async def download_one(chapter_url, file_path ):
    async with aiohttp.ClientSession() as session:
        async with session.get(chapter_url,headers=headers ) as resp:
            page_source = await resp.text(encoding="utf-8")
            tree = etree.HTML(page_source)
            content = tree.xpath('//div[@class="content"]/p/text()')
            content = "".join(content).replace("\n", "").replace("\t", "").replace(" ", "").strip()
            async with aiofiles.open(file_path, "a", encoding="utf-8") as f:
                await f.write(content)
    print('下载了一篇文章')
async def download_chaptor(chaptor_list):
    tasks = []
    for chaptor in chaptor_list:
        chapter_url = chaptor["chapter_url"]
        chapter_name = chaptor["chapter_name"]

        if not os.path.exists(f"./novel"):
            os.makedirs(f"./novel")

        file_path = f"./novel/{chapter_name}.txt"
        t = asyncio.create_task(download_one(chapter_url, file_path ))
        tasks.append(t)
    await asyncio.wait(tasks)
def run():
    url = "https://www.mingchaonaxieshier.com/"
    chaptor_list = get_chaptor_info(url)
    asyncio.run(download_chaptor(chaptor_list))


if __name__ == '__main__':
    run()
