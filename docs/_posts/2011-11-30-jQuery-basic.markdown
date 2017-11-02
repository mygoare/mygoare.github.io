---
layout: post
title:  "jQuery 基础总结"
date:   2011-11-30 9:50
categories: Front end
---

一些 jQuery 基础

{% highlight javascript %}
$(document).ready(function(){})
//相当于onload事件jQuery对象与dom对象的转换

$("#msg").html();
$("#msg")[0].innerHTML;
$("#msg").eq(0)[0].innerHTML;
$("#msg").get(0).innerHTML; //如何获取jQuery集合的某一项
$("div").eq(2).html(); //调用jquery对象的方法
$("div").get(2).innerHTML; //调用dom的方法属性同一函数实现set和get
$("#msg").html(); //返回id为msg的元素节点的html内容。
$("#msg").html("<b>new content</b>");
$("#msg").text(); //返回id为msg的元素节点的文本内容。
$("#msg").text("<b>new content</b>");

$("#msg").height(); //返回id为msg的元素的高度
$("#msg").height("300"); //将id为msg的元素的高度设为300
$("#msg").width(); //返回id为msg的元素的宽度
$("#msg").width("300"); //将id为msg的元素的宽度设为300

$("input").val(); //返回表单输入框的value值
$("input").val("test"); //将表单输入框的value值设为test

$("#msg").click(); //触发id为msg的元素的单击事件
$("#msg").click(fn); //为id为msg的元素单击事件添加函数
//同样blur,focus,select,submit事件都可以有着两种调用方法集合处理功能

$("p").each(function(i){this.style.color=['#f00','#0f0','#00f']});
//为索引分别为0，1，2的p元素分别设定不同的字体颜色。

$("tr").each(function(i){this.style.backgroundColor=['#ccc','#fff'][i%2]});
//实现表格的隔行换色效果

$("p").click(function(){.html())});
//为每个p元素增加了click事件，单击某个p元素则弹出其内容操作元素的样式
$("#msg").css("background"); //返回元素的背景颜色
$("#msg").css("background","#ccc") //设定元素背景为灰色
$("#msg").height(300); $("#msg").width("200"); //设定宽高
$("#msg").css({ color: "red", background: "blue" });
//以名值对的形式设定样式
$("#msg").addClass("select"); //为元素增加名称为select的class
$("#msg").removeClass("select"); //删除元素名称为select的class
$("#msg").toggleClass("select"); 
//如果存在（不存在）就删除（添加）名称为select的class绑定事件 
$("p").bind("click", function(){.text());});//为每个p元素添加单击事件
$("p").unbind(); //删除所有p元素上的所有事件
$("p").unbind("click") //删除所有p元素上的单击事件
{% endhighlight %}
