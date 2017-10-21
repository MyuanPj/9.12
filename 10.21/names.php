<?php 
// 第一步，导入文件
$dates = file_get_contents("names.txt");
// echo "$dates";
$names = explode("\n", $dates);
// print_r($names);
$length = count($names);
// $zz = array();
for ($i=0; $i < $length; $i++) { 
	$zz[$i] = explode("|", $names[$i]);
	
}
// print_r($names[71]);

$length_2 = count($zz[0]);

// print_r($zz[0]);
for ($i=0; $i < $length-1; $i++) { 
	$a[$i] = strtolower($zz[$i][4]);
	
}
// print_r($a);

for ($i=0; $i < $length-1; $i++) { 
	$aa[$i] = str_replace("http://","",$zz[$i][4]);
	
}
// print_r($aa);
 

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
		<table border="1" id="bor">
		<?php for ($i=0; $i < $length-1; $i++) { ?>
		<tr>
			<?php for ($j=0; $j < $length_2-1; $j++) { ?>
			<td><?php echo $zz[$i][$j]; ?></td>
			<?php } ?>
			<td><a href=<?php echo $a[$i]; ?>><?php echo $aa[$i]; ?></a></td>
		</tr>
		<?php } ?>
		
		</table>
</body>
</html>

