<?php 

if(!empty($_COOKIE['txt'])) {
	$rember = explode('|',$_COOKIE['txt']);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>txt</title>
</head>
<style>
	#page {
		width: 400px;
		height: 600px;
		background: skyblue;
		margin: 0 auto;
	}
	#input {
		width: 400px;
		display: block;
		margin: 0 auto;
	}
	ul {
		list-style: none;
	}
</style>
<body>
	<div id="page">
		<ul>
			<?php if (!empty($rember)): ?>
				<?php foreach ($rember as $item): ?>
				<li><?php echo $item ?></li>
				<?php endforeach ?>
			<?php endif ?>
		</ul>
	</div>
	<form action="abc.php" id="input" method="post">
		输入：<input type="text" name="input">
		<button>保存</button>
	</form>
</body>
</html>