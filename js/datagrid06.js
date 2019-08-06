//扩展dateTimeBox
$.extend($.fn.datagrid.defaults.editors,{
	datetimebox:{
		init:function(container,options){
			var input=$('<input type="text">').appendTo(container);
			options.editable=false;
			input.datetimebox(options);
			return input;
		},
		getValue:function(target){
			return $(target).datetimebox('getValue');
		},
		setValue:function(target,value){
			$(target).datetimebox('setValue',value);
		},
		resize:function(target,width){
			$(target).datetimebox('resize',width);
		},
		destroy:function(target){
			$(target).datetimebox('destroy');
		}
	}
});

$(function(){
	
	obj = {
	   //editRow:false,
	   editRow:undefined,
		//搜索功能
	  search:function(){
		 $("#box").datagrid('load',{
			 user:$.trim($('input[name="user"]').val()),
			 date_from:$('input[name="date_from"]').val(),
			 date_to:$('input[name="date_to"]').val(),
		 });
	  },
	  //添加功能
	  add:function(){
		  $('#save,#redo').show();
		  /*
		  //当前页行结尾添加
		$('#box').datagrid('appendRow',{
			user:'huangwei',
			email:'709347404@qq.com',
			date:'2016-11-11',
		});
		*/
		
		if(this.editRow==undefined){
			//添加一行
			$('#box').datagrid('insertRow',{
				index:0,
				row:{
					
				},
			});
			
			//将第一行设置为可编辑状态
			$('#box').datagrid('beginEdit',0);
		     this.editRow=0;
	      }
	   }, 
	   save:function(){
		   //保存成功后执行
		   //$('#save,#redo').hide();
		   //this.editRow=false;
		   //将第一行设置为结束编辑状态
			$('#box').datagrid('endEdit',this.editRow);
	   },
	   redo:function(){
		   $('#save,#redo').hide();
		   this.editRow=undefined;
		   $('#box').datagrid('rejectChanges');//回滚到上一步状态
	   },
	   edit:function(){
		   var rows=$('#box').datagrid('getSelections');//返回所被选中的行
		   if(rows.length==1){
			  if(this.editRow !=undefined){
				$('#box').datagrid('endEdit',this.editRow);
				}
				if(this.editRow == undefined){
					var index=$('#box').datagrid('getRowIndex',rows[0]);//返回选中行的索引
					
					$('#save,#redo').show();
					$('#box').datagrid('beginEdit',index);//编辑前操作
					this.editRow=index;
					$('#box').datagrid('unselectRow',index);//取消被选中的行
				} 
		   }else{
			   $.messager.alert('警告','修改必须或者只能选择一行','warining');
		   }		    
	   },
	   remove:function(){
		    var rows=$('#box').datagrid('getSelections');//返回所被选中的行
			if(rows.length>0){
				$.messager.confirm('确定操作','您正在要删除所选的记录吗？',function(flag){
					if(flag){
						var ids=[];
						for(var i=0;i<rows.length;i++){
							ids.push(rows[i].id);						
						}
						console.log(ids.join(','));
					}
				});
			}else{
				$.messager.alert('提示','请选择要删除的记录！','info')
			}
	   }
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
		//singleSelect:true,//只能选定一行				
		columns:[[//DataGrid列配置对象
		   {
			   field:'id',
			   title:'编号',
			   sortable:true,
			   width:100,
			   checkbox:true,
		   },
		   {
			   field:'user',//列字段名称
			   title:'账号',//列标题名称		   
			   sortable:true,
			   width:100,
			   editor:{
				 type:"validatebox",  
				 options:{
					 required:true,
				 },
			   },
		   },
		   {
			   field:'email',
			   title:'邮件',			   
			   sortable:true,
               width:100,	
               editor:{
				 type:"validatebox",  
				 options:{
					 required:true,
					 validType:'email',
				 },
			   },		   
		   },
		   {
			   field:'date',
			   title:'注册时间',			    
			   sortable:true,//可点击排序
			   width:100,
			   editor:{
				 type:"datetimebox",  
				 options:{
					 required:true,
				 },
			   },
		   },
		]],
		toolbar:'#tb',
		pagination:true,//分页组件底部是否显示分页工具栏
		pageSize:10,//设置分页时设置每页多少条
		pageList:[10,20,30],//设置分页时初始化条数选择大小
		pageNumber:1,//设置分页时初始化页码	
		sortName:'date',//设置哪些列可以进行排序
		sortOrder:'DESC',//设置列排序的顺序
		onDblClickRow:function(rowIndex,rowData){//双击行
		    if(obj.editRow !=undefined){
				$('#box').datagrid('endEdit',obj.editRow);
			}
		    if(obj.editRow == undefined){
				$('#save,#redo').show();
				$('#box').datagrid('beginEdit',rowIndex);//编辑前操作
				obj.editRow=rowIndex;
			}
			
		},
		onAfterEdit:function(rowIndex,rowData,changes){//用户完成编辑一行的时候触发		
			$('#save,#redo').hide();
			obj.editRow=undefined;
			console.log(rowData);
		},    
	});
});