<?php
// CORS 허용
include_once 'cors.php';

// 데이터베이스 연결
include 'db_con.php';

    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $pw2 = $_POST['pw2'];
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $profile_img = 'members/images/monika.jpg';
    $regist_day = date("Y-m-d h:i:s");
    
    $ip = $_SERVER['REMOTE_ADDR'];
      
    if(!$con){
      die('연결실패 : '.mysqli_connect_error());
      }
          


// 회원정보 수정 쿼리
    $sql = "INSERT INTO members (id, pw, pw2, name, gender, phone, email, profile_img, regist_day)
    VALUES ('$id', '$pw', '$pw2', '$name', '$gender', '$phone', '$email', '$profile_img', '$regist_day')";

    $result = mysqli_query($con, $sql);
        
    if($result) {
    echo json_encode([
        'success' => true,
        'id' => $id,
        'pw' => $pw,
        'pw2' => $pw2,
        'name' => $name,
        'gender' => $gender,
        'phone' => $phone,
        'email' => $email,
        'profile_img' => $profile_img, 
        'regist_day' => $regist_day 
    ]);
    } else{
    echo json_encode([
        'success' => false
    ]);
    
    }



?>