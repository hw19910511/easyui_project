$(function(){
	$.fn.progressbar.defaults.value=30;
	$("#box").progressbar({
		width:400,
		height:30,
		value:30,
		text:'{value}%',
		onChange:function(newValue,oldValue){
			console.log('新:'+newValue+',旧:'+oldValue);
		},
	});
	
	/*setTimeout(function(){
		$("#box").progressbar('setValue',70);
	},1000);
	setInterval(function(){
		$("#box").progressbar('setValue',$("#box").progressbar('getValue')+5);
	},200);*/
	
	console.log($("#box").progressbar('options'));
	$("#box").progressbar('resize',600);
});