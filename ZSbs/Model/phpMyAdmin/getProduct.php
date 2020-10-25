<?php
    require_once "db.php";

    $query = "SELECT * FROM product";

    $data = mysqli_query($connect,$query);

    class OneForAll{
        public function OneForAll($id, $title, $image, $description, $code){
            $this->ID_BB 		= $id;
            $this->TITLE        = $title;
            $this->IMAGE        = $image;
            $this->DESCRIPTION  = $description;
            $this->CODE         = $code;
        }
    }
    //2. Tao array
    $mangSV = array();
    //3. Them phan tu vao mang

    while ($row = mysqli_fetch_assoc($data)) {
        # code...
        
        array_push($mangSV, new OneForAll(
            $row['id'], 
            $row['title'], 
            $row['image'],
            $row['description'],
            $row['code']  ));
    }
    //4. Chuyeenr dinh dang mang -> JSON
    echo json_encode($mangSV);

?>