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
		},*/
		onContextMenu:function(e,title,index){//右击事件
			alert(e.type+'|'+title+'|'+index);
		}
	});
});