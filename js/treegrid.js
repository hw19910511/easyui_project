$(function(){
	$('#box').treegrid({
		url:'treegrid.json',
		width:400,
		idField:'id',
		treeField:'name',
		columns:[[
		   {
				field : 'name',
				title : '菜单名称',
				width : 180,
			},
			{
				field : 'date',
				title : '创建时间',
				width : 180,
			},
		]]
	});
});