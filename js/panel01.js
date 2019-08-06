$(function(){
	$("#box").panel({
		//id:'pox',
		title:'面板',
		width:500,
		height:150,
		iconCls:'icon-search',
		//left:200,
		//top:200,
		cls:'a',
		headerCls:'b',
		bodyCls:'c',
		style : {
			'min-height':'200px',
		},
		//fit:true,
		//border:false,
		//doSize:false,
		//noheader:true,
		//content:'chuangjianl',
		collapsible:true,
		minimizable:true,
		maximizable:true,
		closable:true,
		//tools:'#tt',
		tools:[{
			iconCls:'icon-help',
			handler:function(){
				alert('help');
			},
		},{
			iconCls:'icon-remove',
			handler:function(){
				alert('remove');
			},
		}],
		//collapsed:true,
		//minimized:true,//初始化最小
		//maximized:true,//初始化最大
		//closed:true,//初始化关闭
		//href:'www.baidu.com',//远程加载数据到面板上
		//loadingMessage:'加载中...',
		/* extractor:function(data){
			return data.substring(0,3);
		} *///定义如何从ajax应答数据中提取内容，返回提取数据
	});
	//$("#box").panel('panel').css('position','absolute');
});