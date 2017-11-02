---
layout: post
title:  "在 linux ( ubuntu ) 上装 dropbox"
date:   2012-6-20 13:09
categories: Tech
---

首先想说的是：纵观各大云网盘，大家都用着 linux 做为服务器，却只有 dropbox 推出了 linux 客户端，还是 dropbox 对的起 linux 啊。dropbox 我就不多介绍了，在我心中，最优秀的网盘。

其实，在linux ( ubuntu ) 上装 dropbox 并不是什么难事，和装其他 linux 软件无异。只是，身在天朝，身不由己啊，大家懂的，不多说了。

首先，到dropbox官网下载

![](http://pic.yupoo.com/mygoare_v/C3rvRT0W/medium.jpg)

下载下来正常安装。这些都没什么，问题马上来了。

dropbox安装的只是一部分，它还需要下载安装daemon来完成。

这时，你可以在 终端 中输入 dropbox:

![](http://pic.yupoo.com/mygoare_v/C3rxplcq/medium.jpg)

如果再输入 dropbox start ，会报错并提示你 dropbox start -i 安装daemon（依赖文件）.

但天朝的墙好高，是下不下来的。我平时都用 goagent 翻墙的，但这是， goagent 好像也无力了。不过我们还是有其他办法！

既然知道还需要另一个daemon，我们只需要通过其他手段把daemon单独下载下来就可以了。

这样问题就简单了，daemon下载地址：[http://dl-web.dropbox.com/u/17/dropbox-lnx.x86-1.4.9.tar.gz](http://dl-web.dropbox.com/u/17/dropbox-lnx.x86-1.4.9.tar.gz)（需翻墙）

我自己上传的dbank地址：[http://dl.dbank.com/c068jutvxf](http://dl.dbank.com/c068jutvxf)

然后：`tar vxf dropbox-lnx.x86-1.4.9.tar.gz` 解压，`ls -a` 后发现隐藏文件*.dropbox-dist/* ， `mv .dropbox-dist/ ~/`，再 `dropbox start -i`，就OK了！！！

Good luck!!
