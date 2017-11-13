---
layout: post
title:  "JS模拟重载"
date:   2011-06-27 10:36
categories: Diary
---

![Javascript模拟重载](https://i.imgur.com/QGc6ka7.jpg)

大家都知道，JS是没重载的，如果给JS定义了一个函数，再定义一个同名函数，结果只是后者把前者覆盖了。

关于重载，我的理解：就是给一个函数写两个定义，但给两个定义传递的参数的类型和数量不一样。

但是JS函数中的参数是很有个性的（哈哈），JS的解析器不会管参数那么多，管你有没有参数，也不管参数有多少。因为ECMAScript中解释JS中的参数其实是用一个数组来表示的，函数在接收参数的时候始终接收的是这个数组，其它的就不管了。

正因为这样，我们便可以用arguments对象来访问函数中的所传递的参。

如：`arguments[0]`是第一个参数，`arguments[1]`则是第二个参数。

所以，JS特殊的参数机制导致JS是不可能有重载的，因为JS解析器根本不鸟参数，就别说什么参数类型，参数数量了。

但可以模拟重载（只是模拟），不说了，上代码：

{% highlight javascript %}
function helloWorld(){
 if(arguments[1]){
  alert(arguments[0]+"##"+arguments[1]);
 }else{
  alert(arguments[0]+"##Hello");
 }
}
helloWorld(1,2);       //1##2
helloWorld(1,2,3,4);   //1##2
helloWorld(2);         //2##Hello
helloWorld();          //undefined##Hello
helloWorld(3,)         //语法错误
{% endhighlight %}

最后再说一句：JS传参传的都是值，不传引用！这个下次再写！
