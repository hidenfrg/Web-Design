// JavaScript Document

function pass() 
{ 
var user1="test"//用户名，可以更改掉 
var pass1="test"//密码，改掉 
var pass=document.myform.password.value 
var user=document.myform.user.value 
if (user == user1&&pass==pass1) 
  {alert("成功登录...欢迎你") 
   document.write("<HTML>") 
   document.write("<body bgcolor='#fef4d9'>") 
   document.write("<center><p><font size='6'color='darkblue'>欢迎进入!!</p>") 
   document.write("<p><a href='http://www.sina.com.cn'>新浪网</a><br>") 
   document.write("</html>")} 
else if(user == ""){
	alert("用户名为空");
}
else if(user != user1)
{ 
alert("用户名错误，请重新输入");
} 
else if(user == user1&&pass!=pass1)
{ 
alert("密码错误，请重新输入");
} 

}

function reset(){
	var pass=document.myform.password.value 
    var user=document.myform.user.value 
	pass="";
	user="";
}
