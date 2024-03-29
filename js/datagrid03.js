$(function(){
	$('#box').datagrid({
		width:500,
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
		//fitColumns:true,//是否自动展开或收缩，以达到自适应
		//scrollbarSize:30,//滚动条所占的宽度或高度
		singleSelect:true,//只能选定一行
		showHeader:true,//显示行头
		showFooter:false,//显示行尾
		rowStyler:function(index,row){//行样式设定
			//console.log(row);
			if(row.user=='路飞'){
				//这里返回的也可以是CSS的class名称
				//return 'background-color:orange';
			}
		},
		columns:[[//DataGrid列配置对象
		   {
			   field:'user',//列字段名称
			   title:'账号',//列标题名称
			   //width:100,//列宽度
			   sortable:true,
			   align:'center',//对齐列数据
			   //fixed:true,//阻止自适应
			   resizable:true,//改变大小
			   hidden:false,//隐藏列
		   },
		   {
			   field:'email',
			   title:'邮件',
			    //width:190,
				sortable:true,
				/* sorter:function(a,b){
					console.log(a+'|'+b);
				}, */
				halign:'center',//对其标题
				formatter:function(value,row,index){//单元格格式化函数
					return '['+value+']';
				},
				styler:function(value,row,index){//单元格样式函数
					if(value=='大熊'){
						return 'background-color:orange';
					}
				},
		   },
		   {
			   field:'date',
			   title:'注册时间',
			    //width:190,
				sortable:true,//可点击排序
		   },
		]],
		data:[
		  {
			user:'手工用户',
			email:'手工邮件',
			date:'2016-11-11',			
		  }
		],
		pagination:true,//分页组件底部是否显示分页工具栏
		pageSize:10,//设置分页时设置每页多少条
		pageList:[10,20,30],//设置分页时初始化条数选择大小
		pageNumber:1,//设置分页时初始化页码
		pagePosition:'bottom',//设置分页工具栏的位置
		sortName:'date',//设置哪些列可以进行排序
		sortOrder:'DESC',//设置列排序的顺序
		remoteSort:false,//设置服务器对数据进行排序
	    //multiSort:true,//设置是否运行多列排序
		//method:'get',//设置请求远程数据类型
		queryParams:{
			id:1,
		},//设置请求远程数据发送的额外数据
	});
});