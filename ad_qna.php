<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';


$sql="SELECT * FROM ad_qna";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

$data= array();
 //배열로 할당 JSON으로 데이터 보냄
while($row = mysqli_fetch_assoc($result)){

  $data[] = array(
  "num" => $row['num'],
  "aq_p" => $row['aq_p'],
  "aq_t" => $row['aq_t'],
  "aq_r_have" => $row['aq_r_have'],
  "aq_date" => $row['aq_date'],
  "aq_memo" => $row['aq_memo']
  ); 
}
  
echo json_encode(array("ad_qnalist" => $data));


?>