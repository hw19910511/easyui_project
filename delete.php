<?php 
   //sleep(3);
   require 'config.php';
   
   $ids=$_POST['ids'];
   
   mysql_query("DELETE FROM think_user WHERE id IN ($ids)") or die('SQL´íÎó');
   
   echo mysql_affected_rows();
   
   mysql_close();
?>