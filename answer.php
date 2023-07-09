<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';

header('Content-Type: text/html; charset=UTF-8');

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
  "aq_date" => substr($row['aq_date'], 0, 10),
  "aq_memo" => $row['aq_memo']
  ); 
}

$sql2="SELECT * FROM qna";
$result2 = mysqli_query($con,$sql2);
$row2 = mysqli_fetch_array($result);

$data2= array();
 //배열로 할당 JSON으로 데이터 보냄
while($row2 = mysqli_fetch_assoc($result2)){
  $data2[] = array(
  "num" => $row2['num'],
  "id" => $row2['id'],
  "sort" => $row2['sort'],
  "title" => $row2['title'],
  "r_have" => $row2['r_have'],
  "memo" => $row2['memo'],
  "regist_day" => substr($row2['regist_day'], 0, 10)
  ); 
}
  
echo json_encode(array("qnalist" => $data2, "adqnalist" => $data));


?>