<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';


$sql="SELECT * FROM qna";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

$data= array();
 //배열로 할당 JSON으로 데이터 보냄
while($row = mysqli_fetch_assoc($result)){

  $data[] = array(
  "num" => $row['num'],
  "id" => $row['id'],
  "sort" => $row['sort'],
  "r_have" => $row['r_have'],
  "memo" => $row['memo'],
  "regist_day" => $row['regist_day']
  ); 
}
  
echo json_encode(array("qnalist" => $data));


?>