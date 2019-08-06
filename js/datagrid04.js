$(function(){
	
	obj={
	  search:function(){
		 $("#box").datagrid('load',{
			 user:$.trim($('input[name="user"]').val()),
			 date_from:$('input[name="date_from"]').val(),
			 date_to:$('input[name="date_to"]').val(),
		 });
	  }	,
	};
	
	$('#box').datagrid({
		width:600,
		//height:250,
		//url:'datagrid.json',
		//url:'datagrid.php',
		url:'user.php',
		//loadMsg:'努力展开中...',//从远程加载数据显示的提示信息
		title:'用户列表',
		iconCls:'icon-search',
		striped:true,//是否显示斑马线效果
		nowrap:true,//是否在一行显示所有数据
		rownumbers:true,//显示行号
		fitColumns:true,//是否自动展开或收缩，以达到自适应		
		singleSelect:true,//只能选定一行				
		columns:[[//DataGrid列配置对象
		   {
			   field:'user',//列字段名称
			   title:'账号',//列标题名称		   
			   sortable:true,
			   width:100,
		   },
		   {
			   field:'email',
			   title:'邮件',			   
			   sortable:true,
               width:100,			   
		   },
		   {
			   field:'date',
			   title:'注册时间',			    
			   sortable:true,//可点击排序
			   width:100,
		   },
		]],
		toolbar:'#tb',
		pagination:true,//分页组件底部是否显示分页工具栏
		pageSize:10,//设置分页时设置每页多少条
		pageList:[10,20,30],//设置分页时初始化条数选择大小
		pageNumber:1,//设置分页时初始化页码	
		sortName:'date',//设置哪些列可以进行排序
		sortOrder:'DESC',//设置列排序的顺序
			    
	});
});