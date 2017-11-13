---
layout: post
title:  "最短的IE判断 : !-[1,]"
date:   2011-06-27 09:37
categories: Diary
---

![最短的IE判断：!-[1,]](https://i.imgur.com/QcaO2Uf.jpg)

已经不记得在什么时候第一次看到这个了，不过当时仿佛是眼前一亮，随之而来的便是疑惑，短短的六个字符，就能辩明“真伪”。

自己在网上也搜索过，不过都不是很详细，只是大概地说了下是利用IE与其它浏览器在创建数组时所存在的一些差异。

这些天一直在翻阅《Javascript高级程序设计（第二版）》，有所收获，看到Array类型，随之便豁然开朗啦。

首先说下IE与其它浏览器在创建数组时的差异：

{% highlight javascript %}
var names = ["mao","wei","guo",];
{% endhighlight %}

就对于上面的语句，在IE中，会认为数组的长度为4，最后一项为"undefined"；而在其它浏览器中，会忽略逗号后的，长度为3。

而前面的一元减操作符，其实用一元加操作符效果也一样，即：!+[1,]。

因为Array类型不属于JS中的5种基本数据类型，为复杂数据类型，即Object类型。所以一元减操作符在应用于该类型时会先调用该对象的valueOf()方法，如果返回为NaN，则调用toString()方法。

在Array类型中，valueOf()方法与toString()方法返回结果一样，为数组中各项值的字符串形式拼接而成的一个以逗号分隔的字符串。如上例中：

{% highlight javascript %}
alert(names.toString());  //mao,wei,guo
alert(names.valueOf());   //mao,wei,guo
{% endhighlight %}

但是，就在这里，IE的问题就来了：

如果在IE里运行，结果绝对是不一样的。因为前面提到，IE对于上例的数组会认为长度是4，即数组为["mao","wei","guo","undefined"]，而在Array数组的valueOf()和toString()方法中，若数组项中存在undefined或null，则返回一个空字符。所以IE中的结果会是：

{% highlight javascript %}
alert(names.toString());
//IE中的结果，注意最后逗号后面还有个空字符   mao,wei,guo,
{% endhighlight %}

了解了这些，那!-[1,]也就好理解了。

-[1,]，到这一步，IE中的结果会是NaN；其它浏览器的结果则为-1。

再加上布尔操作符!，便分别返回不同的true 和 false。就这样，OVER了。

最后贴上应用：

{% highlight javascript %}
var mygoare = {};
mygoare.ie = !-[1,];
if(mygoare.ie){
 alert("童鞋，这是IE呀！");
}else{
 alert("非IE，推荐用chrome，谁用谁知道！");
}
{% endhighlight %}
