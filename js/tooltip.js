$(function(){
	$.fn.tooltip.defaults.position = 'top';//默认值
	$("#box").tooltip({
		content:'<strong>这是一个提示信息</strong>',
		//position:'right',
		//trackMouse:true,//鼠标跟随
		//deltaX:100,
		//deltaY:100,
		//showEvent:'click',//显示激活
		//hideEvent:'dblclick',//消失激活
		//showDelay:1500,
		//hideDelay:1500,
		 onShow:function(e){
			//alert('显示的时候触发');
			//console.log($('#box').tooltip('tip'));
			//console.log($('#box').tooltip('arrow'));
			$('.tooltip-bottom').css('left',500);
		},
		onHide:function(e){
			//alert('隐藏的时候触发');
			$("#box").tooltip('reposition');
		},
		/* onUpdate:function(content){
			alert('内容改变了为：'+content);
		},  
		onPosition:function(left,top){
			alert('left:'+left+',top:'+top);
		}, */
		/* onDestroy:function(e){
			alert('工具栏被销毁了');
		}, */
	});
	 $("#box").click(function(){
		/*$(this).tooltip('update','改变了');*/
		//$(this).tooltip('destroy');
	}); 
	/* console.log($("#box").tooltip('options'));
	$('#box').tooltip('show');
	$('#box').tooltip('hide'); */
	
});