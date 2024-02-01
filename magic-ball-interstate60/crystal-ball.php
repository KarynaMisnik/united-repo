<?php
$messsage = '';
$conn = mysqli_connect('localhost', 'root');
$db = mysqli_select_db ($conn, 'quotes');
if(isset($_POST['submit'])){
$query = "SELECT id, text FROM generator order by RAND() limit 1";
$result = mysqli_query($conn, $query);
while($row = mysqli_fetch_assoc($result)){
if(isset($_POST['submit'])){    
$messsage = $row['text'];
}
}
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jolly+Lodger&family=Orbitron:wght@600&family=Special+Elite&display=swap"
rel="stylesheet">
<!-- Custom fonts -->
<link rel= "stylesheet"  href="./crystal_style.css" >
<title>Crystal ball</title>
</head>

<body>
<div id="stars">
<h3> <?php echo $messsage; ?></h3>
<div class="container">
<form action="" method="post">
<div class="crystal_ball"><input type="submit" name="submit" value="" id="generate"></div>
</div>
<h2>Touch a crystal ball </h2>
</div>

</body>
</html>