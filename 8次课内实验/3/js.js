// JavaScript Document

function pass() 
{ 
var user1="test"//�û��������Ը��ĵ� 
var pass1="test"//���룬�ĵ� 
var pass=document.myform.password.value 
var user=document.myform.user.value 
if (user == user1&&pass==pass1) 
  {alert("�ɹ���¼...��ӭ��") 
   document.write("<HTML>") 
   document.write("<body bgcolor='#fef4d9'>") 
   document.write("<center><p><font size='6'color='darkblue'>��ӭ����!!</p>") 
   document.write("<p><a href='http://www.sina.com.cn'>������</a><br>") 
   document.write("</html>")} 
else if(user == ""){
	alert("�û���Ϊ��");
}
else if(user != user1)
{ 
alert("�û�����������������");
} 
else if(user == user1&&pass!=pass1)
{ 
alert("�����������������");
} 

}

function reset(){
	var pass=document.myform.password.value 
    var user=document.myform.user.value 
	pass="";
	user="";
}
