$(function(){
	
	$.extend($.fn.validatebox.defaults.rules,{
		minLength:{
			validator:function(value,param){
				return value.length >= param[0];
			},
			message:'请输入不小于{0}的字符',
		},
	});//自定义验证
	
	$("#email").validatebox({
		required:true,//验证是否为空
		validType:'minLength[5]',//验证格式类型
		//validType:'url',
		//validType:'length[2,5]',
		//validType:'remote["content.php","abc"]',
		//validType:['email','length[5,10]'],
		//delay:1000,//延时
		//missingMessage:'请输入内容',//当文本框未填写时出现的提示信息
		//invalidMessage:'您输入的电子邮件格式不合法！',//当文本框的内容被验证为无效时出现的提示
		//tipPosition:'right',//定义当文本框内容无效的时候提示显示的位置
	    // daltaX:100,//提示框在水平方向上位移
	    //novalidate:true,//当为true时关闭验证功能	
	});
	//console.log($('#email').validatebox('options'));
	//$('#email').validatebox('destroy');
	
	/* $(document).click(function(){
		//console.log($('#email').validatebox('validate'));//验证文本框的内容是否有效
		console.log($('#email').validatebox('isValid'));//调用validate方法并且返回验证结果
	}); 
	
	$('#email').validatebox('disableValidation');//禁用验证
	$('#email').validatebox('enableValidation');//启用验证
	*/
});