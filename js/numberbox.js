$(function(){
	$("#box").numberbox({
		//value:123456789,
		//min:5,
		//max:500,
		precision:2,//在十进制分割符之后显示的最大精度
		//decimalSeparator:',',//使用哪一种十进制字符分隔数字的整数和小数部分。
		//groupSeparator:',',
		//prefix:'$',//前缀
		//suffix:'€',//后缀
		/* filter:function(){
			return true;
		}, 
		formatter:function(value){
			return '111,'+value;
		},
		parser:function(s){
			return '111,'+s;
		},
		onChange:function(newValue,oldValue){
			alert(newValue+'|'+oldValue);
		},*/
	});
	
	$(document).click(function(){
		//$("#box").numberbox('fix');//自动修正
		//console.log($("#box").numberbox('getValue'));//取值
		$("#box").numberbox('setValue',123);//赋值
	});
});