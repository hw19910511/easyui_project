<?php 
    //sleep(3);
   require 'config.php';
   
    $row=$_POST['row'];
	$id=$row['id'];
	$user=$row['user'];
	$email=$row['email'];
	$date=$row['date'];
   
   mysql_query("UPDATE think_user SET user='$user',email='$email',date='$date'  WHERE id='$id'") or die('SQL错误');
   
   echo mysql_affected_rows();
   
   mysql_close();
  
?>