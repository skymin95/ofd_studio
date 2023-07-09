
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Accept, Content-Type,Content-Length, Aceept-Encoding, X-CSRF-Token, Authorizaion');
header("Content-type:text/html;charset=utf-8");


// 데이터베이스 연결
include 'db_con.php';

$num = $_POST['num'];
$id = $_POST['id'];
$sort = $_POST['sort'];
$title = $_POST['title'];
$memo = $_POST['memo'];
$regist_day = $_POST['regist_day'];

$sql = "INSERT INTO qna (num, id, sort, title, memo, regist_day)
        VALUES ('$num', '$id', '$sort', '$title', '$memo', '$regist_day')";


$result = mysqli_query($con, $sql);

if($result) {
  echo json_encode([
      'success' => true,
      'num' => $num,
      'id' => $id,
      'sort' => $sort,
      'title' => $title,
      'memo' => $memo,
      'regist_day' =>  substr($regist_day, 0, 10)
  ]);
  } else{
  echo json_encode([
      'success' => false
  ]);
  }

?>

