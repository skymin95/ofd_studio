<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Accept, Content-Type,Content-Length, Aceept-Encoding, X-CSRF-Token, Authorizaion');
header("Content-type:text/html;charset=utf-8");

// 데이터베이스 연결
include 'db_con.php';

    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $pw2 = $_POST['pw2'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    // $p_img = $_POST['profile_img'];    
    
    $ip = $_SERVER['REMOTE_ADDR'];
      
    if(!$con){
      die('연결실패 : '.mysqli_connect_error());
      }
          


// 회원정보 수정 쿼리
    $sql = "update members set name='$name',  pw='$pw', pw2='$pw2', phone='$phone', email='$email'  where id='$id'";

    $result = mysqli_query($con, $sql);
        
    if($result) {
    echo json_encode([
        'success' => true,
        'id' => $id,
        'name' => $name,
        'phone' => $phone,
        'email' => $email 
     ]);
    } else{
    echo json_encode([
        'success' => false
    ]);
    
    }



?>