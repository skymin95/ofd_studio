<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OFD STUDIO</title>

  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/base.css">
  <link rel="stylesheet" href="./css/u_common.css">
  <link rel="stylesheet" href="./css/class.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- jQuery UI 라이브러리 -->
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script script src="./script/u_common.js"></script>
</head>
<body>
  
<?php 
  include('header.php');
?>
<main>
  <section id="class_view">
    <h2 class="hidden">강의 상세페이지</h2>
    <article>
      <h3>
        <span>강의명</span>
        Black Eyed Pass - ACTION 
        <!-- php -->
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div class="cinfo_wrap flex">   

        <div class="cinfo_const flex">
      
          <div class="const">
            <p>모니카</p>
          </div>

          <div class="const">
            <p>립제이</p>
          </div>

        </div>

        <div class="cinfo_detail">
            <div class="flex">
              <p>Instructor</p>
              <!--php -->
              <p>모니카, 립제이</p>
            </div>

            <div class="flex">
              <p>level</p>
              <!--php -->
              <p>엄마나춤춰</p>
            </div>

            <div class="flex">
              <p>genre</p>
              <!--php -->
              <p>코레오그래피</p>
            </div>

            <div class="flex">
              <p>곡 정보</p>
              <!--php -->
              <p>Black Eyed Peas - ACTION</p>
            </div>
          </div>


        </div>
    </article>

    <article>
      <h3 class="hidden">강의내용</h3>
      <div>
        <h3>강의내용</h3>
        <label for="chim_kong">찜하기</label>
        <button>
        <i class="fa-solid fa-heart"></i>
        </button>
      </div>
      <p>
        <!-- php-->
        간단한 아이솔레이션부터 파워풀한 동작까지<br>
        쉽게 따라할 수 있도록 해보았습니다. 이제 이렇게 따라해볼까요?
      </p>
        <!-- php-->
      <div class="flex">
      <p><span>39,000</span>원</p>
      <button>장바구니</button>
      </div>
    </article>

    <article>
      <h2>관련 강의</h2>
      <div class="flex">
      
      <div>
      <!-- php -->
      <iframe width="175" height="105" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>모니카의 몰루몰루 절루절루</p>
      </div>

      <div>
      <!-- php -->
      <iframe width="175" height="105" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>강잼민의 도전 강냉이 털기</p>
      </div>
      </div>
      
      <p>강의에 대해 궁금하신 사항이 있으신가요?</p>
      <a href="qna_write.php?id=" title="1:1문의 하러 가기" class="q_btn">1:1 문의 하러 가기</a>
    </article>


  </section>

</main>
<?php 
  include('footer.php');
?>
</body>
</html>
