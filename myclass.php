<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>my class</title>

  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/base.css">
  <link rel="stylesheet" href="./css/u_common.css">
  <link rel="stylesheet" href="./css/myclass.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- jQuery UI 라이브러리 -->
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="./script/u_common.js"></script>
</head>
<body>

  <?php 

  include ('header.php');
  
  ?>
  
  <main>
  <section>
    <h2 class="hidden">프로필</h2>
    <article class="myclass_top flex">
    <h3 class="hidden">프로필</h3>
    <img src="./images/myclass/kayday.jpg" alt="프로필 이미지" class="profile_img">
      <!-- 이미지 src 추후 데이터 변경 예정 -->

    <div class="profile_info">
      
      <div class="info_top flex">
        <p><span>ARRON</span>님</p>
        <a href="joinmodify.php?id=">
        <i class="fa-solid fa-gear"></i>
        </a>
      </div>

      <div class="info_bottom t_center flex">
        <div>
          <p>6</p>
          <p><a href="mychallenge.php">챌린지</a></p>
        </div>

        <div>
          <p>3</p>
          <p>팔로잉</p>
        </div>

        <div>
          <p>2</p>
          <p>팔로워</p>
        </div>
      </div>

    </div>
  </article>
  </section>

  <?php 
  
  include('footer.php')

  ?>
</body>
</html>