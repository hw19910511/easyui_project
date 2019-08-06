$(function(){
	$('#box').combogrid({
		loadMsg:'数据加载中...',
		panelWidth:600,
		idField:'id',
		textField:'user',
		url:'combobox.php',
		fitColumns:true,
		multiple:true,//是否复选
		//mode:'remote',//远程加载
		filter:function(q,row){
			var opts=$(this).combogrid('options');
			console.log(row[opts.textField].indexOf(q));
			return row[opts.textField].indexOf(q)>=0;
		},
		columns:[[
		  {
			 field:'id',
			 title:'编号',
			 width:100,
			 checkbox:true,
		  },
		  {
			 field:'user',
			 title:'帐号',
			 width:100,
		  },
		  {
			 field:'email',
			 title:'邮箱',
			 width:100,
		  },
		  {
			 field:'date',
			 title:'注册时间',
			 width:100,
		  },
	  ]],
	});
});

function abc(){
	//$("#box").combogrid('clear');
	//$("#box").combogrid('setValue',2);
	$("#box").combogrid('setValues',[1,2]);
}