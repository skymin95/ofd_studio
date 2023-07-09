import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';


function MypageButton(props) {
  const navigate = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('loginInfo');

    const userRemove = JSON.stringify({"id": '', "profile" : '', "name" : '', "phone":'', "email" : '', "expirationTime": '' })
    localStorage.setItem("loginInfo", userRemove);
    navigate('/');
  }
  return (
    <>
    <Link to='/mypage/myclasslist'className='my_btn'>나의 강의 보러가기
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/mylikes'className='my_btn'>찜한 강의 보러가기
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/receipt'className='my_btn'>구매 내역
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/qna'className='my_btn'>1:1문의
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <button onClick={Logout} className='my_btn'>
      로그아웃하기
    </button>
    </>
  );
}

export default MypageButton;