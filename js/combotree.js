$(function(){
	$('#box').combotree({
		url:'tree01.json',
		required:true,
		editable:true,//定义用户是否可以直接输入文本到字段中
	});
});

function abc(){
	//console.log($('#box').combotree('tree'));
	//var t=$('#box').combotree('tree');
	//console.log(t.tree('getSelected'));
	/* 
	$('#box').combotree('loadData',[//读取本地树形数据
	  {
		  text:'加载'
	  }
	]);
	 */
	 
	// $('#box').combotree('reload');//再次请求远程数据
	// $('#box').combotree('clear');//清空控件的值
	
	//$('#box').combotree('setValue',1);//设置组件值
	//$('#box').combotree('setValues',[1,2,'aaa']);//设置组件值数组
}