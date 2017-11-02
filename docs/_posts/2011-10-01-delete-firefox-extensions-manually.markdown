---
layout: post
title:  "手动删除Firefox中一些无法卸载的扩展"
date:   2011-10-1 12:36
categories: Front end
---

这篇文章是转的，里面的方面，经本人亲测，是有效的，觉得很不错，就转过来了。嘎嘎

安装skype的时候没注意选择，结果skype给我的Firefox安装了一个扩展，让我吐血的是想卸载这个扩展的时候却发现卸载的按钮是灰色的。

![](http://pic.yupoo.com/mygoare_v/Bpr56PCd/E0TjL.png)

同样流氓的扩展还有安装JDK以后出现的两个Java Console

![](http://pic.yupoo.com/mygoare_v/Bpr57vsa/qZl2v.png)

没办法，看来得手工删除了。

首先跑去Firefox存储用户的文件夹搜索这几个扩展，无果

在Windows7下面的路径为：

`C:\Users\{用户名}\AppData\Roaming\Mozilla\Firefox\Profiles\{随机码}.default\extensions`

在XP的路径为：

`C:\Documents and Settings\{用户名}\Application Data\Mozilla\Firefox\Profiles\{随机码}\extensions`

附，鉴定扩展的方法：

有的扩展文件夹的名称是基于邮箱的，所以比较好找如firebug的是firebug@software.joehewitt.com

但是有的扩展是用的GUID来命名例如FireFtp的文件夹叫做{a7c6cf7f-112c-4500-a7ea-39801a327e5f}

这时我们可以用任意文本编辑器打开每个扩展文件夹下面的install.rdf,然后查看xml字段`<em:name></em:name>`中的名称即可确定是哪个扩展

如果个人文件夹里面没有那么该扩展应该就是公共的，于是去firefox的安装路径下面寻找扩展文件夹

skype的插件果然在里面

![](http://pic.yupoo.com/mygoare_v/Bpr57UWg/hRRPY.png)

删除几个相关的文件夹，重启firefox后那几个插件就消失了，问题解决
