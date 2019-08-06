<?php
  require 'config.php';
  
  $id=0;
  
  if(isset($_POST['id'])){
	  $id=$_POST['id'];
  }
  
  $query=mysql_query("SELECT id,text,state FROM think_nav WHERE tid='$id'") or die('SQL ´íÎó£¡');
  
  $json='';
  
  while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
	  $row['state']='closed';
	  $json .=json_encode($row).',';
  }
  
  $json=substr($json,0,-1);
  echo '['.$json'']';
  mysql_close();
?>