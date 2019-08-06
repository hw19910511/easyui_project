$(function(){
	$('#box').timespinner({
		//editable:false,
		value:'00:00:00',
		//min:'00:00',
		//max:'23:59',
		//separator:'/',//定义在小时、分钟和秒之间的分隔符
		showSeconds:true,//定义是否显示秒钟信息
		highlight:0,//初始选中的字段 0=小时、1=分钟、2=秒
	});
	$('#box').timespinner('setValue','17:11:22');
	console.log($('#box').timespinner('getHours'));
});