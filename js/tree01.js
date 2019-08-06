$(function(){
	$("#box").tree({
		//url:'tree01.json',
		animate:true,//是否显示折叠动画
		checkbox:true,//是否显示复选框
		cascadeCheck:false,//定义是否层叠选中状态
		onlyLeafCheck:true,//定义是否只在末级节点之前显示复选框
		lines:true,//定义是否显示树控件上的虚线
		dnd:true,//是否显示拖拽功能
		data:[{
			"text":'本地节点'
		}],
		formatter:function(node){
			//console.log(node);
			return '['+node.text+']';
		}
	});
});