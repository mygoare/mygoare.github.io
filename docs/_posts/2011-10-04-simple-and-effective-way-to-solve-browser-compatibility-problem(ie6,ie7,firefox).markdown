---
layout: post
title:  "简单有效的CSS兼容解决方案 ( ie6 ie7 firefox )"
date:   2011-10-4 16:26
categories: Front end
---

![css hack](http://pic.yupoo.com/mygoare_v/BpUNMpXe/medium.jpg)

现在，浏览器的发展很快，但总会有那么些人放着优秀的浏览器不用，总守着原始的古董。上次小博经过一系列改造，已经不支持ie6进行访问了，如今ie已经更新到了ie9，win8将会搭载ie10浏览器...

这里提供的CSS兼容性解决方案绝对行之有效，而且简单，不说废话了：

{% highlight css %}
margin:25px auto;  /*标准浏览器*/
#margin:25px auto; /*IE7*/
_margin:25px auto; /*对IE6有效 ( 专属 ) */
{% endhighlight %}

( 注意：顺序不可颠倒，因为后面两项是对浏览器HACK的修补 )

不信你就试试，哈哈！
