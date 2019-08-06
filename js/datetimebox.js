$(function(){
	$("#box").datetimebox({
		//value:'2016-10-31 23:59:59',
		//showSeconds:false,
		//timeSeparator:'/',
	});
	//$("#box").datetimebox('setValue','2016-11-11 11:11:11');
	console.log($('#box').datetimebox('spinner').spinner('getValue'));
});