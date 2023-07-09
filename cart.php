<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';


$sql="SELECT * FROM `cart`";
$result = mysqli_query($con,$sql);

$data= array();
 //배열로 할당 JSON으로 데이터 보냄
while($row = mysqli_fetch_assoc($result)){

  $data[] = array(
  "b_num" => $row['b_num'],
  "id" => $row['id'],
  "MC_num" => $row['MC_num'],
  "b_title" => $row['b_title'],
  "b_price" => $row['b_price'],
  "b_level" => $row['b_level'],
  "b_instructor" => $row['b_instructor']
  ); 
}
  
echo json_encode(array("cart" => $data));


?>
