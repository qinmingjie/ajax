<?php 
	$username = $_GET["username"];
	if($username == "qinmingjie"){
		echo "用户名存在";
	}else{
		echo "此用户名可用";
	}
 ?>