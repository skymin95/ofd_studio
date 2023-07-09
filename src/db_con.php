<?php
  // $db_domain="localhost";
  // $db_id="root";
  // $db_pw="";
  // $db_name="revolution";
  $db_domain="localhost";
  $db_id="jamm";
  $db_pw="jamjam1!";
  $db_name="jamm";

  $con = mysqli_connect($db_domain,$db_id,$db_pw,$db_name);



    if(!$con){
      die( "서버와의 연결 실패!: " . mysqli_connect_error());
    }else{
      return $con;
    }

    session_start();



?>