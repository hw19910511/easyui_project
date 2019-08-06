$(function(){
	$("#box").tree({
		url:'tree.json',
		animate:true,
		checkbox:true,
		cascadeCheck:false,
		onlyLeafCheck:true,
		lines:true,
		dnd:true,
		onClick:function(node){
			//console.log($('#box').tree('getNode',node.target));//获取指定节点对象
			//console.log($('#box').tree('getData',node.target));//获取指定节点数据，包含它的子节点
		}
	});
});

function abc(){
	/* 
	$("#box").tree('loadData',[//加载树控件数据
	  {
		  text:'加载'
	  }
	]);
	 */
	 $('#box').tree('reload');//重新载入树控件数据
	 console.log($('#box').tree('getRoot'));
}