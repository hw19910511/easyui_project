$(function(){
	$("#box").window({
		width:300,
		height:250,
		/*iconCls:'icon-add',
		fit:true,
		 
		width:600,
		height:400,
		title:'窗口',
		collapsible:false,//是否可折叠
		minimizable:false,//最小化
		maximizable:false,//最大化
		closable:false,//关闭按钮
		//closed:true,//初始化是否关闭
		zIndex:9999,
		draggable:false,//拖动
		resizable:false,//缩放
		shadow:false,//阴影
		modal:true,//幕布
		
		width:200,
		height:150,
		inline:true,*/
		/* onClose:function(){
			alert('关闭后触发！');
		} */
	});
	//console.log($('#box').window('window'));
	//console.log($('#box').window('body'));
	$(document).click(function(){
		$("#box").window('move',{
			left:0,
			top:0,
		});
	});
	
	$(document).dblclick(function(){
		$("#box").window('vcenter');
	});
});