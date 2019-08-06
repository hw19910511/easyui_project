$(function(){
	$("#ss").searchbox({
		width:300,
		height:22,
		menu:'#box',//搜索类型菜单
		searcher:function(name,value){//在用户按下搜索按钮或回车键的时候调用searcher函数
			alert(name+'-'+value);
		},
		prompt:'请输入关键字',//提示文字
		value:'固定的值',
		//disabled:true,//是否禁用
	});
	
	//console.log($("#ss").searchbox('menu'));//返回搜索类型菜单对象
	var m=$("#ss").searchbox('menu');
	m.menu('setIcon',{
		target:m.menu('findItem','体育频道').target,
		iconCls:'icon-save',
	});
	
	//console.log($("#ss").searchbox('textbox'));//返回文本框对象
	//console.log($("#ss").searchbox('getValue'));//返回当前搜索值
	//$("#ss").searchbox('setValue','123456789');//设置一个新的搜索值
	//console.log($("#ss").searchbox('getName'));//返回当前搜索类型名
	//$("#ss").searchbox('selectName','sports');//选择当前搜索类型名
	//$("#ss").searchbox('destroy');//销毁控件
	//$("#ss").searchbox('resize',500);//重置组件宽度
	//$("#ss").searchbox('disable');//禁用该控件
	//$("#ss").searchbox('enable');//起用该控件
	//$("#ss").searchbox('clear');//清理搜索框内容
	$(document).dblclick(function(){
		$("#ss").searchbox('reset');//重置搜索框内容
	});
});