$(function(){
	$('#box').accordion({
		//width:500,
		//height:300,
		//fit:true,
		//border:false,
		//animate:false,
		//multiple:true,//多选项
		//selected:2,//默认选中项
		/* onSelect:function(title,index){//选中事件
			alert(title+'|'+index);
		}, */
		/* onUnselect:function(title,index){//取消选中事件
			alert(title+'|'+index);
		}, */
		/* onAdd:function(title,index){//在添加新面板的时候触发
			alert(title+'|'+index);
		}, */
		
		onBeforeRemove:function(title,index){//在移除前新面板的时候触发
			alert('before'+title+'|'+index);
		},
		onRemove:function(title,index){//在移除后新面板的时候触发
			alert(' '+title+'|'+index);
		},
	})/*.hide()*/;
	//console.log($('#box').accordion('panels'));//获取所有面板
	
	/* $(document).click(function(){
		$('#box').accordion().show();
		$('#box').accordion('resize');//获取选中的面板
	}); */
	
	//console.log($('#box').accordion('getSelected'));//获取选中的面板
	
	/* $(document).click(function(){
		console.log($('#box').accordion('getSelections'));//获取所有选中的面板
	}); */
	
	//console.log($('#box').accordion('getPanel',1));//获取指定的面板
	
	//console.log($('#box').accordion('getPanelIndex',"#a2"));//获取指定面板的索引
	
	//$('#box').accordion('select',1);//选择指定面板
	
	//$('#box').accordion('unselect',0);//取消选择指定面板
	
	/*
	$('#box').accordion('add',{//添加新面板
		title:'新面板',
		content:'新面板内容',
		closable:true,
		onClose:function(){
			alert('close');
		},
		//selected:false,
		//collapsible:false,
	});
	*/
	
	$("#box").accordion('remove',0);//移除指定面板
});