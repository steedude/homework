# Restful API練習

使用books.json檔案的方式與express 寫出下列API

1. 取得書本列表

```
GET /books
參數 query string
page 頁數 default 1
size 筆數 default 10
title 可用名稱完整filter書名
```

2. 新增書本

```
POST /books
需檢查title有無重覆
Body
{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
}
```

3. 修改書本

```
PUT /books/{title}
Body
{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
}
```

4. 刪除書本

```
DELETE /books/{title}
```
