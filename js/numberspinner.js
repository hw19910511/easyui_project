$(function(){
	$("#box").numberspinner({
		value:10,
		increment:5,
		min:10,
		max:500,
		onSpinUp:function(){
			//alert('up');
		},
		onSpinDown:function(){
			//alert('down');
		},
	});
	
	console.log($('#box').numberspinner('getValue'));
	$('#box').numberspinner('setValue',100);
});