$(function(){
	/*
	$('#box').form('submit',{
		url:'form.php',
		onSubmit:function(param){//提交额外的数据
			param.code='123456789';
			return $(this).form('validate');//验证成功
		},
		success:function(data){ 
		   //alert(data);
		   var data=eval('('+data+')');
		   if(data.email){
			   alert(data.email);
		   }
		},
	});
	*/
	/*
	$("#box").form('load',{
		name:'蜡笔小新',
		email:'labixiaoxin@qq.com',
	});*/
	$("#box").form({
		onBeforeLoad:function(){
			alert('load之前');
		},
		onLoadSuccess:function(data){
			alert('load成功'+data.email);
		},
		onLoadError:function(){
			alert('load错误');
		},
	});
	
	$("#box").form('load','load.php');
	
	$("#box").form('disablevalidation');//禁用验证
	$("#box").form('嗯ablevalidation');//起用验证
	
});