<?php 

if (!empty($_COOKIE['txt']) && !empty($_POST['input'])) {	
	setcookie('txt',$_COOKIE['txt'] . '|' . $_POST['input']);

} elseif (!empty($_POST['input'])) {
	setcookie('txt',$_POST['input']);

}

header('Location:memo.php');