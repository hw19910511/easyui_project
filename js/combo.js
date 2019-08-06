$(function(){
	$("#box").combo({
		//width:300,
		//height:50,
		//panelWidth:300,
		//panelHeight:300,
		//editable:false,//定义用户是否可以直接输入文本到字段中
		//disabled:true,
		//readonly:true,
		//hasDownArrow:false,//定义是否显示向下箭头按钮
		//value:'123',//默认值
		//delay:1000,//最后一次输入事件与执行搜索之间的延迟间隔
		/*
		onShowPanel:function(){
			alert('显示触发');
		},
		onHidePanel:function(){
			alert('隐藏触发');
		},		
		onChange:function(newValue,oldValue){
			alert(newValue+'|'+oldValue);
		}, */
		required:true,
	});
	
	$("#food").appendTo($('#box').combo('panel'));
	$('#food input').click(function(){
		var v=$(this).val();
		var s=$(this).next('span').text();
		$('#box').combo('setValue',v).combo('setText',s).combo('hidePanel');
	});
	console.log($('#box').combo('textbox'));
	
	$(document).click(function(){
		//$('#box').combo('resize','width');
		//$('#box').combo('showPanel');//显示面板
		//console.log($('#box').combo('isValid'));//返回验证结果
		//console.log($('#box').combo('getText'));//获取输入的文本
		//console.log($('#box').combo('getValue'));//获取组件的值
		$("#box").combo('setValue',['1','2','3']);
		console.log($('#box').combo('getValues'));//获取组件的值
	});
});