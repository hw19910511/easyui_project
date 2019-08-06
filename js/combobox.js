$(function(){
	$('#box').combobox({
		valueField:'id',//基础数据值名称绑定到该下拉列表框
		textField:'user',//基础数据字段名称绑定到该下拉列表框
		//url:'datagrid.json',
		url:'combobox.php',
		groupField:'gender',//指定分组的字段名称
		groupFormatter:function(group){//返回格式化后的分组标题文本
			return '['+group+']';
		},
		fliter:function(q,row){
			var opts=$(this).combobox('options');
			return row[opts.textField].indexof(q)>=0;
		},
		formatter:function(row){
			var opts=$(this).combobox('options');
			return '['+row[opts.textField]+']';
		},
		/* onSelect:function(record){
			alert('选择列表项时触发');
			console.log(record);
		}, 
		onUnselect:function(record){
			alert('取消选择列表项时触发');
			console.log(record);
		},*/
		//mode:'remote',//服务器端查询
		/*
		data:[
		   {
			 "id":1,
			 "user":"蜡笔小新",
			 "email":"xiaoxin@163.com",
			 "date":"2014-10-1"
		   },
		   {
			 "id":2,
			 "user":"樱桃小丸子",
			 "email":"xiaowanzi@163.com",
			 "date":"2014-10-2"
		   },
		   {
			 "id":3,
			 "user":"山田一户",
			 "email":"yihu@163.com",
			 "date":"2014-10-3"
		   }
		]
		*/
	});
});

function abc(){
	//$('#box').combobox('unselect',1);//取消选择指定项
	//$('#box').combobox('setValue',4);//设置下拉列表框的值
	//$('#box').combobox('setValues',[1,2]);//设置下拉列表框值数组
	//$('#box').combobox('reload');//请求远程列表数据
	//console.log($('#box').combobox('getData'));//返回加载数据
	$('#box').combobox('loadData',[
	    {
			 "id":1,
			 "user":"蜡笔小新",
			 "email":"xiaoxin@163.com",
			 "date":"2014-10-1"
		   },
		   {
			 "id":2,
			 "user":"樱桃小丸子",
			 "email":"xiaowanzi@163.com",
			 "date":"2014-10-2"
		   },
		   {
			 "id":3,
			 "user":"山田一户",
			 "email":"yihu@163.com",
			 "date":"2014-10-3"
		   }
		]
	);//读取本地列表数据
}