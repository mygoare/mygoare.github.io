---
layout: post
title:  "IE6下字体美观的解决办法"
date:   2011-9-18 14:47
categories: Front end
---

先抱怨下：这些天天天都在纠结着网站的事，无奈...

为了网站可以在ie6下尽量保持网站原有的美观与舒适，一直都在寻求ie6下字体的办法，如今感觉略有小成，得瑟如下：

我想大家都知道，如今最适合在电子屏幕上显示的字体就是“微软雅黑”了（可笑的是这款字体不是中国公司造的，是微软公司为vista系统打造的一款字体）。

首先考虑肯定是给页面设“雅黑”字体了，这一点vista,win7用户都是完美支持。然后就是坑爹的XP用户了，特别是不升级浏览器的顽固派。以前一直很疑惑ie6到底支不支持“微软雅黑”，（在用户已安装字体前提下），因为以前在自己本机上测试过，ie7,8显示出微软雅黑，ie6却没有效果。

经过自己的一番搜索，搞定了，如下：

[http://blog.csdn.net/xfsnow/article/details/6635568](http://blog.csdn.net/xfsnow/article/details/6635568)

后面研究发现，xp用户都是安装有黑体字体的，所以我的想法是利用ie6 hack默认给ie6 为黑体字体，而其它浏览器首选"雅黑"，如下：

{% highlight css %}
font-family:"Microsoft YaHei",SimHei,Arial,Helvetica,sans-serif;
_font-family:SimHei,sans-serif; /*安装了clear type，否则默认不设最佳*/
{% endhighlight %}
