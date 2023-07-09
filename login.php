<?php 

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Accept, Content-Type,Content-Length, Aceept-Encoding, X-CSRF-Token, Authorizaion');
header("Content-type:text/html;charset=utf-8");

// 데이터베이스 연결
include 'db_con.php';

$id = $_POST['id'];
$pass = $_POST['pw'];


// 쿼리문을 사용하여 id 체크

$sql = "select * from members where id='$id'";
$result = mysqli_query($con, $sql);

$num_match = mysqli_num_rows($result);

if(!$num_match) {
      echo json_encode([
        'sucess' => false,
        'error' => '잘못된 ID입니다.'
      ]);
} else {
  $row = mysqli_fetch_array($result);
  $profile = $row['profile_img'];
  $name = $row['name'];
  $phone = $row['phone'];
  $email = $row['email'];
  
    if($pass === $row['pw']){
      echo json_encode([
        'success' => true,
        'id' => $id,
        'profile' => $profile,
        'name' => $name,
        'phone' => $phone,
        'email' => $email
      ]);
    } else {
      echo json_encode([
        'success' => false,
        'error' => '잘못된 비밀번호입니다.'
      ]);
    }
}

?>