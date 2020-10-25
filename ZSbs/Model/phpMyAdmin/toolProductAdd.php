<?php 
	require "db.php";
	$json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
    //---------TEST CASE------------------
	// $TITLE           = "Stop";
	// $IMAGE	        = "";
    // $DESCRIPTION 	= "Chieu Thu Den";
    // $CODE            = "PN019";
	//-------------------------------------
	$TITLE          = $obj['Title'];
	$IMAGE          = $obj['ImageUri'];
	$DESCRIPTION 	= $obj['Description'];
	$CODE 	        = $obj['Code'];
    //-------------------------------------
    $sql  = "SELECT * FROM product WHERE title = '$TITLE'";
    
    $result = mysqli_query($connect,$sql);
	if($result){
		$count = mysqli_num_rows($result);
		if($count > 0){
			$query = "NULL";
		}else{
			$query 	= "INSERT INTO product VALUES(null,'$TITLE','$IMAGE','$DESCRIPTION','$CODE')";
		}
	}		
	if(mysqli_query($connect,$query)){
		echo "Success";
	}else{
		echo "Failed Register!";
	}
 ?>