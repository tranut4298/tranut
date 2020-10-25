<?php 
    require 'db.php';
    $json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
	//---------TEST CASE------------------
	// $ID_BB 			= "4";
	// $TITLE           = "Give Way 2";
	// $IMAGE	        = "";
    // $DESCRIPTION 	= "NULL";
    // $CODE            = "CT019b";
	//-------------------------------------
	$ID_BB 			 = $obj['Id_bb'];

	$query = "DELETE FROM product WHERE id ='$ID_BB'";

	if(mysqli_query($connect,$query)){
		echo "Success";
	}else{
		echo "Error";
	}
 ?>