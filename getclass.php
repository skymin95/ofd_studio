<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Accept, Content-Type,Content-Length, Aceept-Encoding, X-CSRF-Token, Authorizaion');
header("Content-type:text/html;charset=utf-8");

// 데이터베이스 연결
include 'db_con.php';
file_put_contents('post_data.txt', print_r($_POST, true));
$id = $_POST['id'];
$MC_nums = explode(',', $_POST['MC_num']); // 쉼표로 구분된 MC_num 값을 배열로 분할
$progress = $_POST['progress'];
$settingdata = $_POST['settingdata'];

// 배열인 경우 foreach를 사용하여 각 번호를 처리
if (is_array($MC_nums)) {
  $successCount = 0; // 성공한 작업 수를 세기 위한 변수
  foreach ($MC_nums as $MC_num) {
    $sql = "INSERT INTO status (id, MC_num, progress, settingdata)
            VALUES ('$id', '$MC_num', '$progress', '$settingdata')";

    $result = mysqli_query($con, $sql);

    // 처리 결과에 따라 성공한 작업 수를 증가
    if ($result) {
      $successCount++;
    }
  }

  // 모든 작업이 성공한 경우에만 응답을 전송
  if ($successCount === count($MC_nums)) {
    echo json_encode([
      'success' => true,
      'id' => $id,
      'MC_num' => $MC_nums,
      'progress' => $progress,
      'settingdata' => $settingdata
    ]);
  } else {
    echo json_encode([
      'success' => false,
      'error' => mysqli_error($con)
    ]);
  }
} else {
  // 배열이 아닌 경우에 대한 처리 (예: 단일 값 처리)
  $sql = "INSERT INTO status (id, MC_num, progress, settingdata)
          VALUES ('$id', '$MC_nums', '$progress', '$settingdata')";

  $result = mysqli_query($con, $sql);

  // 처리 결과에 따른 응답 전송
  if ($result) {
    echo json_encode([
      'success' => true,
      'id' => $id,
      'MC_num' => $MC_nums,
      'progress' => $progress,
      'settingdata' => $settingdata
    ]);
  } else {
    echo json_encode([
      'success' => false
    ]);
  }
}

// ...
?>