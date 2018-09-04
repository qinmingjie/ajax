<?php 
	$name = $_POST["username"];
	if($name == "qinmingjie"){
		echo "用户名存在";
	}else{
		echo "此用户名可用";
	}
?>
