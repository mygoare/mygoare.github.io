---
layout: post
title:  "论字符编码"
date:   2011-12-27 16:32
categories: Tech
---

在最开始学习制作网页的时候，当出现了乱码的时候，就总是喜欢在DW或是notepad++里把编码换来换去，直到乱码消失，现在看来有些可笑。今天，在看书的时候，看到Unicode编码，不忍就索性把编码知识都扫一遍吧。

先看下维基百科字符编码绝妙的介绍。还有这篇精确解释Unicode，写得很好，看来文章作者是用了心的。

这篇是谈UTF8与UTF8 without BOM之间的问题，我以前在notepad++上也遇到过。

大概看过三篇文章，基本上就能懂了，我再自己写些简要：

在大学里大一时学习的ASCII编码，就是一种8位二进制编码，不过它只能表示128种字符，它占8bit，只有一字节大小。

Unicode是一种正在发展的编码字符集，由统一码联盟制定，希望将全世界常用文字都函括进去。Unicode兼容ASCII。7即ASCII中有的字符Unicode中都有，并且对应相同的编码数字。

Unicode编码长度可达到32位，即4字节。第一字节称为组，第二字节称为面，第三字节称为行，第四字节称为点。第0组第0面里的字符可以只用2个字节表示，且涵盖了绝大部分的常用字，所以备受青睐。为了方便称呼，Unicode给它了一个名称——基本多文种平面（BMP）。基本多文种平面值域和上域都是0到FFFF，共计65535个码点。8 9基本多文种平面是Unicode的子集。

虽然Unicode的表示长度是32位，但因为通常表示的是常用字，且常用字在BMP的字库里，所以表示长度往往缩减为16位。

ANSI编码与Unicode编码的不同。ANSI编码最常见的应用就是windows的记事本程序中，是记事本默认的保存编码格式，ANSI 算是一种压缩编码，当遇到标准的ASCII字符时，采用单字节表示，当遇到非标准的ASCII字符（如中文）是，采用双字节表示。

![](http://pic.yupoo.com/mygoare_v/BCIx0tIz/yVxiX.png)

这样一来，懂了吗？呵呵！

再举向个例子：

我向notepad++里输入一个字母“a”，通过改变文件编码，它的文件大小也会发生改变。

ANSI编码下文件大小：

![](http://pic.yupoo.com/mygoare_v/BCIkSEgN/medium.jpg)

Utf8编码：

![](http://pic.yupoo.com/mygoare_v/BCIkTmZw/medium.jpg)

Utf8 without BOM 编码：

![](http://pic.yupoo.com/mygoare_v/BCIkSQPn/medium.jpg)
