$(function(){
	var buttons=$.extend([],$.fn.datebox.defaults.buttons);
	  buttons.splice(1,0,{
			text:'新增',
			handler:function(target){
				alert('新增')
			}
		});
	
   $("#box").datebox({
	   //panelWidth:300,//下拉面板宽度
	   //panelHeight:300,//下拉面板高度
	   //currentText:'T',//显示当天按钮
	   //closeText:'C',//显示关闭按钮
	   //okText:'O',//显示ok按钮
	   //buttons:buttons,
	  /* formatter:function(date){
		   return date.getFullYear()+'/'+parseInt(date.getMonth()+1)+'/'+date.getDate();
	   },
	   parser:function(date){
		   return new Date(2016,10,11);
	   }
	   onSelect:function(){
		   alert('当选择的时候触发');
	   }*/
   });	
   //sharedCalendar  将一个日历控件共享给多个datebox控件使用
   /*$('#cc').calendar({
	   firstDay:1,
   });*/
   //datebox('calendar')返回日历对象
   $('#box').datebox('calendar').calendar({
	   firstDay:1,
   });
   $('#box').datebox('setValue','2015-6-1');
});