$(function(){
	$("#box").tabs({
		//width:300,
		//height:100,
		//plain:true,
		//fit:true,
		//border:false,
		//tabWidth:300,
		//scrollIncrement:50,
		//scrollDuration:100,
		tools:[{
			iconCls:'icon-add',
			handler:function(){
				alert('add');
			},
		},{
			iconCls:'icon-edit',
			handler:function(){
				alert('edit');
			},
		}],
		/*tabPosition:'left',
		headerWidth:300,
		selected:2,
		showHeader:false,*/
		/* onSelect:function(title,index){
			alert(title+'|'+index);
		} 
		 onUnselect:function(title,index){
			alert(title+'|'+index);
		} 
		onBeforeClose:function(title,index){
			alert(title+'|'+index);
		},
		onClose:function(title,index){
			alert(title+'|'+index);
		},
		onContextMenu:function(e,title,index){//右击事件
			alert(e.type+'|'+title+'|'+index);
		}*/
		//tabWidth:300,
		/*
		onAdd:function(title,index){
			alert(title+'|'+index);
		}, 
		
		onLoad:function(panel){//加载面板
			alert(panel);
		}
		*/
		
		onUpdate:function(title,index){
			alert(title+'|'+index);
		}, 
	})/* .css('display','none');
	console.log($('#box').tabs('tabs'));
	$(document).click(function(){
		$('#box').tabs().css('display','block');
		$('#box').tabs('resize');
	}); */
	
	//新增选项卡
	/* $("#box").tabs('add',{
		id:'bbb',
		title:'新选项卡',
		content:'新面板',
		//href:'linkbutton.html',
		iconCls:'icon-add',
		width:1,
		height:1,
		collapsible:true,
		closable:true,
		selected:false,
	}); */
	
	//$('#box').tabs('close',1);
	//console.log($('#box').tabs('getTab',1));
	//console.log($('#box').tabs('getTabIndex','#tab2'));//获取索引下标
	//console.log($('#box').tabs('getTabIndex',$('#tab2')));
	//console.log($('#box').tabs('getSelected'));
	//$('#box').tabs('select',1);//默认选中指定项
	//$('#box').tabs('unselect',0);//默认都不选中
	//$('#box').tabs('hideHeader');//隐藏头部
	//$('#box').tabs('showHeader');//显示头部
	//console.log($('#box').tabs('exists',3));//判断面板是否存在
	
	/*
	$('#box').tabs('update',{//更新指定的选项卡面板
		tab:$('#tab2'),
		options:{
			title:'修改标题',
			content:'修改内容',
		},
	});
	*/
	
	$(document).click(function(){
		$('#box').tabs('update',{//更新指定的选项卡面板
		tab:$('#tab2'),
		options:{
			title:'修改标题',
			content:'修改内容',
		},
	  });
	});
	
	
	//$('#box').tabs('disableTab',2);//禁用指定选项卡
	//$('#box').tabs('enableTab',2);//启用指定选项卡
	//$('#box').tabs('scrollBy',100);//滚动选项卡标题指定的像素数量，负值则向右滚动，正值向左滚动
});