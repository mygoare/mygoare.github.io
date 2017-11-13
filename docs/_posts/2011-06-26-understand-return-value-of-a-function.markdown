---
layout: post
title:  "更好地理解函数返回值"
date:   2011-06-26 01:05
categories: Diary
---

![](https://i.imgur.com/nw0ulND.jpg)

今天看了一天《Javascript高级程序设计（第2版）》，学到了很多的东西，这个以后再总结。这本书的一些描述比国内的那些垃圾所谓的JS入门教学书不知强多少倍，那些书简直就是误人子弟，只讲个大概的东西，最本质的却只字不提，这如何让读者去理解JS语言的奥秘精髓所在。其实也不用我多说吧，强烈推荐！！

只是来总结下自己对函数返回值的一些理解吧，虽然也许东西比较简单，但自己感觉到自己在进步，有总结便会有更多的收获。

先说点要点：

JS函数都是有返回值的，默认的返回值为Undefined

JS指定返回值只需return 一个什么 即可

把函数调用运行的结果赋给一变量，才会有返回值

若return 返回值在执行相关操作前，则只会有返回值

看实例：

{% highlight javascript %}
function sum(num1,num2)
{
  alert(num1+num2);
  return num1;
}
var e = sum(2,3);  //输出5
alert(e);  //输出2
{% endhighlight %}

若调换下顺序：

{% highlight javascript %}
function sum(num1,num2)
{
  return num1;
  alert(num1+num2);
}
var e = sum(2,3); //alert不被执行，直接返回e=2
alert(e); //输出2
{% endhighlight %}

都比较简单的东西吧，自己也菜鸟一只，在充电中......
