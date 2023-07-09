<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';


$sql="SELECT * FROM memberclasslist";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

$data= array();
 //배열로 할당 JSON으로 데이터 보냄
while($row = mysqli_fetch_assoc($result)){

  $data[] = array(
  "MC_num" => $row['MC_num'],
  "MC_ing" => $row['MC_ing'],
  "MC_thumbnail" => $row['MC_thumbnail'],
  "MC_videofile" => $row['MC_videofile'],
  "MC_level" => $row['MC_level'],
  "MC_kind" => $row['MC_kind'],
  "MC_title" => $row['MC_title'],
  "MC_instructor" => $row['MC_instructor'],
  "MC_price" => number_format($row['MC_price']),
  "MC_time" => $row['MC_time'],
  "MC_live" => $row['MC_live'],
  "MC_desc" => $row['MC_desc'],
  "MC_music" => $row['MC_music'],
  "MC_profile" => $row['MC_profile'],
  "MC_startdata" => $row['MC_startdata'],
  "MC_finishdata" => $row['MC_finishdata'],
  "MC_registdata" => $row['MC_registdata'],
  "MC_margin" => $row['MC_margin']
  ); 
}
  
echo json_encode(array("memberclasslist" => $data));


?>