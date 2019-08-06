$(function(){
	$('#box').calendar({
		//width:300,
		//height:300,
		//fit:true,
		//border:false,
     	//firstDay:1,//定义一周的第一天是星期几
		//weeks:['S','M','T','W','T','F','S'],//显示的周列表内容
		//months:,
		//year:2015,
		//month:6,
		//current:new Date(2015,6,1),//当前日期
		/* formatter:function(date){//格式化日期
			return '#'+date.getDate();
		}, */
		/*styler:function(date){
			 if(date.getDate()==1){
				return 'background-color:#ccc';
			} 
			 if(date.getDay()==1){
				return 'background-color:#ccc';
			}
		},*/
		/*validator:function(date){
			if(date.getDate()==1){
				return true;
			}else{
				return false;
			}
		},//日期是否可用*/
		/*onSelect:function(date){//选择日期事件
			alert(date);
		},*/
		/*onChange:function(newDate,oldDate){//改变日期事件
			alert(newDate+'|'+oldDate);
		},*/
	});
	$('#box').calendar('moveTo',new Date(2016,10,11));//移动到指定日期
});