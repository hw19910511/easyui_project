$(function(){
	$('#box').propertygrid({
		url:'propertygrid.json',
		showGroup:true,//是否显示属性分组
		groupField:'group',//定义分组的字段名
		groupFormatter:function(group,row){//定义如何格式化分组的值
			return '['+group+']';
		}
	});
});

function abc(){
	//$('#box').propertygrid('collapseGroup');//折叠指定分组
	$('#box').propertygrid('collapseGroup',0);
}