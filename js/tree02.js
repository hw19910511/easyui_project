$(function(){
	$("#box").tree({
		url:'tree.php',
		lines:true,
		onLoadSuccess:function(node,data){
			//console.log(data);
			if(data){
				$(data).each(function(index,value){
					if(this.state=='closed'){
						$('#box').tree('expandAll');
					}
				});
			}
		}
	});
});