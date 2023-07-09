import React, {useState } from 'react';
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login({setUserInfo, loginInfo, setLoginInfo}) {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // let navigate = useNavigate();

  const handleInputChange = (e) => {
    setId(e.target.value);
  }
  console.log(loginInfo);
  const handleInputChange2 = (e) => {
    setPw(e.target.value);
  }

  const phpLink = 'http://jamm.dothome.co.kr/revolution_user/login.php';

  const formdata = new FormData();
    formdata.append('id', id);
    formdata.append('pw', pw);

const LoginForm = (e) => {
  e.preventDefault();
  setLoginInfo(true);
  axios.post(phpLink, formdata)
  .then((response) => {
    setUserInfo(response.data.success); // 데이터 석세스 값을 먼저 받아온다.
    if(loginInfo === true) {
    const id = response.data.id;
    const name = response.data.name;
    const profile = response.data.profile;
    const phone = response.data.phone;
    const email = response.data.email;
    const expirationTime = new Date().getTime() + (30 * 60 * 1000); // 현재 시간에 30분을 더한 값
    const users = JSON.stringify({"id": id, "profile" : profile, "name" : name, "phone":phone, "email" : email, "expirationTime": expirationTime })
    localStorage.setItem("loginInfo", users);
    navigate('/');
  } else {
    alert('비밀번호가 틀렸습니다. 다시 로그인해주세요.(아이디 비밀번호 일치 시 확인 누르고 다시 로그인하시면 됩니다.)');
  }
 })
}


  return (
    <section>
      <article className="login_wrap">
            <h2>로그인</h2>
            <div className='l_form'>
            <input
              type="text"
              placeholder="아이디"
              value={id}
              name="id"
              title="id"
              onChange={
                handleInputChange}
            />
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              title="pw"
              value={pw}
              onChange={
                handleInputChange2}
            />

            <div className='log_check flex'>
              <span className='flex'>
                <input type="checkbox" id='id_check' />
                <label htmlFor="id_check">아이디 저장</label>
              </span>
              <p className='flex'>
                <span>아이디 찾기</span>
                |
                <span>비밀번호 찾기</span>
              </p>
            </div>

            <strong><Link to='/register'>아직 회원이 아니신가요?</Link></strong>
            <button type="button" className="log_btn" onClick={LoginForm}>
          로그인
          </button>
            <span className='log_kakao'>
              <img src={process.env.PUBLIC_URL + '/images/u_member/log_kakao.png'} alt="로그인" width='300' height='45' />
            </span>
          </div>
      </article>
    </section>
  );
}

export default Login;