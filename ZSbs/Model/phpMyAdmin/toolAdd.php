<?php 
	require "db.php";
	$json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
    //---------TEST CASE--------------
	// $USERNAME   = "thoiguyen98";
	// $PASSWORD	= "12345678";
    // $TOKEN 	   = $USERNAME;
    // $IMAGE      = "";
	// $EMAIL 	   = "nguyenthoi98@gmail.com";
	//--------------------
	$USERNAME   = $obj['Username'];
	$PASSWORD   = $obj['Password'];
	$TOKEN 	    = $USERNAME;
	$IMAGE		= '';
	$EMAIL 	    = $obj['Email'];

	$sql  = "SELECT * FROM user WHERE username = '$USERNAME'";
	$result = mysqli_query($connect,$sql);
	if($result){
		$count = mysqli_num_rows($result);
		if($count > 0){
			$query = "NULL";
		}else{
			$query 	= "INSERT INTO user VALUES(null,'$USERNAME','$PASSWORD','$TOKEN','$IMAGE','$EMAIL' )";
		}
	}		
	if(mysqli_query($connect,$query)){
		echo "Success";
	}else{
		echo "Failed Register!";
	}
 ?>