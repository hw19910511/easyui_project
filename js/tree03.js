$(function(){
	$("#box").tree({
		url:'tree.php',
		animate:true,
		checkbox:true,
		cascadeCheck:false,
		onlyLeafCheck:true,
		lines:true,
		dnd:true,
		
		//节点单击点击事件
		/* onClick:function(node){
			console.log(node);
		}, */
		//节点双击点击事件
		/* onDblClick:function(node){
			console.log(node);
		}, */
		//在请求加载远程数据之前触发
		/* onBeforeLoad:function(node,param){
			console.log(node);
			console.log(param);
		}, */
		//在数据加载失败的时候触发
		/* onLoadError:function(arg){
			console.log(arg.status);			
		}, */
		//在节点展开之前触发
		/* onBeforeExpand:function(node){
			console.log(node);
		}, */
		//在节点展开时触发
		/* onExpand:function(node){
			console.log(node);
		}, */
		//在节点收缩之前触发
		/* onBeforeCollapse:function(node){
			console.log(node);
		}, */
		//在节点勾选之前触发
		/* onBeforeCheck:function(node,checked){
			console.log(node);
			console.log(checked);
		}, */
		//在节点选中之前触发
		/* onBeforeSelect:function(node,checked){
			console.log(node);
		}, */
		//右击菜单时触发
		/* oncontextmenu:function(e,node){
			e.preventDefault();
			//查找节点
			$("#box").tree('select',node.target);
			//显示快捷菜单
			$('#menu').menu('show',{
				left:e.pageX,
				top:e.pageY
			});
		} */
		//在节点拖动之前触发
		/* onBeforeDrag:function(node){
			console.log(node);
		}, */
		//节点拖动到达目标位置
		/* onDragEnter:function(target,source){
			console.log(target);
			console.log(source);
		}, */
		//节点放置之前触发
		/* onBeforeDrop:function(target,source,point){
			console.log(target);
			console.log(source);
			console.log(point);
		}, */
	}); 
});