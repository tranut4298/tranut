<?php 
	require "db.php";
	$json 	= file_get_contents('php://input');
	$obj 	= json_decode($json, true); 
    //---------TEST CASE------
	//$TITLE   = "Stop";
	//---------POST-----------
    $TITLE   = $obj['Title'];
    //------------------------
	$sql  = " SELECT * FROM product WHERE title like '$TITLE' ";
	$result = mysqli_query($connect,$sql);
	if($result){
		$count = mysqli_num_rows($result);
		if($count > 0){
            $data = mysqli_query($connect,$sql);
			class OneForAll{
                public function OneForAll($id, $title, $image, $description, $code){
                    $this->ID_BB 		= $id;
                    $this->TITLE        = $title;
                    $this->IMAGE        = $image;
                    $this->DESCRIPTION  = $description;
                    $this->CODE         = $code;
                }
            }
            $mangSV = array();
            while ($row = mysqli_fetch_assoc($data)) {
                # code...
                array_push($mangSV, new OneForAll(
                    $row['id'], 
                    $row['title'], 
                    $row['image'],
                    $row['description'],
                    $row['code']  ));
            }
            //Chuyen dinh dang mang -> JSON
                echo json_encode($mangSV);
		}else{
			echo "Failed!";
		}
	}
 ?>