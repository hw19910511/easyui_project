$(function(){
	$("#box").slider({
		width:300,
		height:300,
		mode:'h',//声明滚动条类型
		rule:[0,'|',25,'|',50,'|',75,'|',100],//数值显示规则
		showTip:true,//显示数值
		reversed:false,//翻转数值
		value:12,//默认数值
		min:0,
		max:100,
		step:1,//增量
		/*
		tipFormatter:function(value){
			return value +'%';
		},//返回数值	
		onSlideStart:function(value){//开始拖动触发事件
			console.log(value);
		},
		onSlideEnd:function(value){//结束拖动触发事件
			console.log(value);
		},
		*/
		onChange:function(newValue,oldValue){//值拖动改变触发
			$("#text").css('font-size',newValue);
		},
	});
	
	$('#box').slider('resize',{
		width:500,
		height:30,
	});
	
	$('#box').slider('setValue',90);
	console.log($('#box').slider('getValue'));
});