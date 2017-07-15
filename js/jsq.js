//文档获取元素通过ID
//我们可以获取元素，可以通过元素对象去获取元素里面的属性值
var jsq = document.getElementById("jsq")
//var num0 = document.getElementById("num0");




//eval这个方法，讲一串字符串进行JS运算
/*var a = eval(jsq.value);
console.log(a);*/
denghao.onclick = function(){
//	jsq.value = eval(jsq.value);
jsq.value="算不出来？你就是个瓜皮！"
}
jian.onclick = function(){
	jsq.value = eval(jsq.value);
}
cheng.onclick = function(){
	jsq.value = eval(jsq.value);
}
chu.onclick = function(){
	jsq.value = eval(jsq.value);
}
document.getElementById("clear").onclick = function(){
	jsq.value = "";
}
document.getElementById("num0").onclick = function(){
	jsq.value = jsq.value+"0";
}

document.getElementById("num1").onclick = function(){
	jsq.value = jsq.value+"1";
}
document.getElementById("num2").onclick = function(){
	jsq.value = jsq.value+"2";
}
document.getElementById("num3").onclick = function(){
	jsq.value = jsq.value+"3";
}
document.getElementById("num4").onclick = function(){
	jsq.value = jsq.value+"4";
}
document.getElementById("num5").onclick = function(){
	jsq.value = jsq.value+"5";
}
document.getElementById("num6").onclick = function(){
	jsq.value = jsq.value+"6";
}
document.getElementById("num7").onclick = function(){
	jsq.value = jsq.value+"7";
}
document.getElementById("num8").onclick = function(){
	jsq.value = jsq.value+"8";
}
document.getElementById("num9").onclick = function(){
	jsq.value = jsq.value+"9";
}
document.getElementById("jia").onclick = function(){
	jsq.value = jsq.value+"-";
}
document.getElementById("jian").onclick = function(){
	jsq.value = jsq.value+"-";
}
document.getElementById("cheng").onclick = function(){
	jsq.value = jsq.value+"*";
}
document.getElementById("chu").onclick = function(){
	jsq.value = jsq.value+"/";
}







