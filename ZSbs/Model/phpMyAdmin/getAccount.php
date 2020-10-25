<?php 
	require "db.php";
	$json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
    //---------TEST CASE--------------
	// $USERNAME   = "thoiguyen98";
	// $PASSWORD	= "12345678";
	//--------------------
	$USERNAME   = $obj['Username'];
	$PASSWORD   = $obj['Password'];

	$sql  = " SELECT * FROM user WHERE username = '$USERNAME' AND password = '$PASSWORD' ";
	$result = mysqli_query($connect,$sql);
	if($result){
		$count = mysqli_num_rows($result);
		if($count > 0){
            $data = mysqli_query($connect,$sql);
			class OneForAll{
                public function OneForAll($id, $username, $password, $token, $image, $email){
                    $this->ID 		    = $id;
                    $this->USERNAME     = $username;
                    $this->PASSWORD     = $password;
                    $this->TOKEN        = $token;
                    $this->IMAGE        = $image;
                    $this->EMAIL        = $email;  
                }
            }
            $mangSV = array();
                while ($row = mysqli_fetch_assoc($data)) {     
                    array_push($mangSV, new OneForAll($row['id'], $row['username'],$row['password'],$row['token'], $row['image'],$row['email']));
                }
            //Chuyen dinh dang mang -> JSON
                echo json_encode($mangSV);
		}else{
			echo "Failed!";
		}
	}
 ?>