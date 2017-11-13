---
layout: post
title:  "css的一些继承"
date:   2011-06-20 15:44
categories: Css
---

![css继承](https://i.imgur.com/HOKETOT.png)

CSS的继承，感觉自己最开始接触到这个词的时候还不知道是何物，虽然自己那时在书写CSS代码的时候都一种在用这个概念，有点可笑，自己自学CSS都是网上看视频学的，没有些什么很系统的认识，这也是弊端吧。

一起来学习下吧，CSS Inheritance – a simple step-by-step tutorial，是由Russ Weakley发布的一个CSS继承的经典PPT。

[PPT地址](http://www.slideshare.net/maxdesign/css-inheritance-a-simple-stepbystep-tutorial)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/1YgIAoMqVV7oxC" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

再说写点自己的一些心得：

整个PPT给人的感觉是：老外真的很风趣，各种插图，各种搞笑；

其中我觉得最要学习的就是font-size的继承，也是作者花了比较多的篇幅。我的理解：font-size继承会根据上一层的依次继承下去，而不是根据最初的继承，再一个导致font-size继承特殊的原因是它的value有时是需要计算的。

作者在继承上留了很大的空间给读者自己去思考，而没有直接下任何结论，让读者自己去理解，这样有了自己的理解总结，才会更加地深刻。

不过对于PPT的83页的结果，我有些自己的见解，我想作者应该是基于最开始的那段p标签包裹em标签的代码得出的表里的结果，即h1,h2只是定义了，却没有真正写到html里去。所以，我在此拓展下，强化下自 己的理解，当然结果也告诉我，我的理解是正确的，哈哈！

CSS代码:

{% highlight css %}
body {font-size:20px;}
h1 {font-size:150%;}
h2 {font-size:200%;}
p {font-size:80%;}
{% endhighlight %}

html代码:

{% highlight css %}
<h2>
  <p>mygoare is coming from <em>China</em> Wuhan</p>
</h2>
<h6>
  <p style="font-size:32px;">mygoare is coming from <em>China</em> Wuhan</p>
</h6>
{% endhighlight %}

html代码中，用h1标签包裹住p和em，结果font-size的继承发生了变化，字体大小与PPT中的不同，证明了自己的理解，很有成就感，哈哈。如果我再深一层给em加百分比大小，那么一定是继承p的大小，再计算。

就说到这，一起学习，一起分享，一起进步！
