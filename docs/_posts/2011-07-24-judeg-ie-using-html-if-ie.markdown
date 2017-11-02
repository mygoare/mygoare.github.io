---
layout: post
title:  "IE版本判断之Html"
date:   2011-7-24 10:08
categories: Front end
---

今天在重温zen coding，查看zen coding配置文件时，偶尔看到html判断IE版本的zen coding缩写，便顺便把相关的知识总结下。

zen coding提供的缩写很简单 cc:ie6 即：`<!--[if lte IE 6]><![endif]-->`

其它的大概还有这些形式（以IE6为例）

zencoding的缩写为 cc:ie

值得注意的是，这类html代码只有在IE中才会识别，其它浏览器只会当作注释，所以个人感觉`<!--[if ！IE]><![endif]>` 这种代码无意义。

其实是很好记忆的：

    lt : less than
    gt : greater than
    lte : less than or eqal
