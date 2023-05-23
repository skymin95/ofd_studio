import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ClassViewRelated from './ClassViewRelated';

function ClassView({userInfo, memberclasslist}) {

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }
    return ''; // Legacy method for cross browser support
  };

  const {viewId} = useParams();

  let findId = memberclasslist.find(function(item) {
    return item.MC_num === viewId;
});

const classUserArr = JSON.parse(userInfo);
const classUser = classUserArr.id;

const cartShoot = new FormData();
cartShoot.append('id', classUser);
cartShoot.append('MC_num', viewId);
cartShoot.append('b_title', findId.MC_title);
cartShoot.append('b_price', findId.MC_price);
cartShoot.append('b_level', findId.MC_level);
cartShoot.append('b_instructor', findId.MC_instructor);

const goCart = (e) => {
  e.preventDefault();
  const phpLink = 'http://jamm.dothome.co.kr/revolution_user/cart_add.php';
  axios.post(phpLink, cartShoot)
  .then((response) => {
      console.log(response);
      if(response.data.success === true) {
        alert('업데이트에 성공했습니다!')
      } else {
        alert('실패');
      }
    }
  )
}

  return (
    <section id="class_view">
    <h2 className="hidden">강의 상세페이지</h2>
    <article>
      <h3>
      <span>강의명</span>
      {findId.MC_title}
      {/* <!-- php --> */}
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

      <div className="cinfo_wrap flex">   

        <div className="cinfo_const flex">
      
          <div className="const flex f_center">
          <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`}  alt="강사 이미지" />
            <p>{findId.MC_instructor}</p>
          </div>

        </div>

        <div className="cinfo_detail">
            <div className="flex">
              <p>Instructor</p>
              {/* <!--php --> */}
              <p>{findId.MC_instructor}</p>
            </div>

            <div className="flex">
              <p>level</p>
              {/* <!--php --> */}
              <p>{findId.MC_level}</p>
            </div>

            <div className="flex">
              <p>genre</p>
              {/* <!--php --> */}
              <p>{findId.MC_kind}</p>
            </div>

            <div className="flex">
              <p>곡 정보</p>
              {/* <!--php --> */}
              <p className='sing_info'>{findId.MC_music}</p>
            </div>
          </div>


        </div>
    </article>

    <article className='class_cont'>
      <h3 class="hidden">강의내용</h3>
      <div className='flex class_cond'>
        <h3>강의내용</h3>
        <div className='flex'>
        <label for="chim_kong">찜하기</label>
        <button className='zzim_btn'>
        <FontAwesomeIcon icon={faHeart} className='zzim'></FontAwesomeIcon>
        </button>
        </div>
      </div>
      <p className='class_desc'>
        {/* <!-- php--> */}
        {findId.MC_desc}
      </p>
        {/* <!-- php--> */}
      <div className="flex pay">
      <p><span>{findId.MC_price}</span>원</p>
      <button className='c_btn' onClick={goCart}>장바구니</button>
      </div>
    </article>
    <ClassViewRelated memberclasslist={memberclasslist} level={findId.MC_level} kind={findId.MC_kind} />
    </section>

  );
}

export default ClassView;