<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Accept, Content-Type,Content-Length, Aceept-Encoding, X-CSRF-Token, Authorizaion');
header("Content-type:text/html;charset=utf-8");

// 데이터베이스 연결
include 'db_con.php';

    $b_num = '0';
    $id = $_POST['id'];
    $MC_num = $_POST['MC_num'];
    $b_title = $_POST['b_title'];
    $b_price = $_POST['b_price'];
    $b_level = $_POST['b_level'];
    $b_instructor = $_POST['b_instructor'];  
    
    $ip = $_SERVER['REMOTE_ADDR'];
      
    if(!$con){
      die('연결실패 : '.mysqli_connect_error());
      }
          


// 회원정보 수정 쿼리
    $sql = "INSERT INTO cart (b_num, id, MC_num, b_title, b_price, b_level, b_instructor)
        VALUES ('$b_num', '$id', '$MC_num', '$b_title', '$b_price', '$b_level', '$b_instructor')";

    $result = mysqli_query($con, $sql);
        
    if($result) {
    echo json_encode([
        'success' => true,
        'b_num' => $b_num,
        'id' => $id,
        'MC_num' => $MC_num,
        'b_title' => $b_title,
        'b_price' => $b_price,
        'b_level' => $b_level,
        'b_instructor' => $b_instructor
    ]);
    } else{
    echo json_encode([
        'success' => false
    ]);
    
    }



?>