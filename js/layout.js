$(function(){
	$("#box").layout({
		//fit:true,
	})/*.css('display','none')*/;
	
	/*
	$(document).click(function(){
		$("#box").layout().css('display','block');
		$("#box").layout('resize');//设置布局大小
	}); 
	*/
	/* console.log($("#box").layout('panel','north'));
	console.log($("#box").layout('collapse','north'));//折叠布局
	console.log($("#box").layout('expand','north'));//展开布局 */
	
	/*
	$('#box').layout('add',{//添加布局
		title:'中间',
		region: 'center',
	});
	*/
	$("#box").layout('remove','east');//移除布局
});