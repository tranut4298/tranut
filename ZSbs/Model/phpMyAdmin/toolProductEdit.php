<?php 
	require "db.php";
	$json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
	//---------TEST CASE------------------
	// $ID_BB 			= "1";
	// $TITLE           = "Stop";
    // $DESCRIPTION 	= "NULL";
    // $CODE            = "PN139";
	//-------------------------------------
	$ID_BB 			 = $obj['Id_bb'];
	$TITLE           = $obj['Title'];
	$DESCRIPTION 	 = $obj['Description'];
	$CODE 	         = $obj['Code'];
	//-------------------------------------
	$sql  = "SELECT * FROM product WHERE title = '$TITLE'";
    
    $result = mysqli_query($connect,$sql);
	if($result){
		$count = mysqli_num_rows($result);
		if($count > 0){
			$sql1  = "SELECT * FROM product WHERE title = '$TITLE' AND id = '$ID_BB'";
			$result1 = mysqli_query($connect,$sql1);
			if($result1){
				$count1 = mysqli_num_rows($result1);
				if($count1 < 1){
					$query = "NULL";
				}else{
					$query	= "UPDATE product SET description='$DESCRIPTION', code='$CODE' WHERE id = '$ID_BB' AND title = '$TITLE'";
				}
			}
		}else{
			$query	= "UPDATE product SET title='$TITLE', description='$DESCRIPTION', code='$CODE' WHERE id = '$ID_BB'";

		}
	}		
	if(mysqli_query($connect,$query)){
		echo "Success";
	}else{
		echo "Failed Update!";
	}
 ?>