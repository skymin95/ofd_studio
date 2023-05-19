
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './components/css/u_common.css';
import './components/css/u_member.css';
import './components/css/mypage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Main from './components/Main';
import Class from './components/main/Class';
import Login from './components/main/Login';
import Register from './components/main/Register';
import Mypage from './components/nav/Mypage';
import MypageUpdate from './components/nav/mypage/MypageUpdate';
import Gnb from './components/nav/Gnb';
import Search from './components/nav/Search';
import Cart from './components/nav/Cart';

import Chatbot from './components/Chatbot';
import ErrorPage from './components/ErrorPage';

function App() {
  /* 유저 로그인, 정보 */
  const [userInfo, setUserInfo] = useState('{"id":"","profile":"","name":"","phone":"","email":""}');
  const [loginInfo, setLoginInfo] = useState(false);
  const [qnalist, setQnalist] = useState([]);
  const [adqnaList, setadqnaList] = useState([]);
  const [error, setError] = useState(null);
  const [write, setWrite] = useState(false);
  const [status, setStatus] = useState([]);
  const [memberclasslist, setmemberClassList] = useState([]);
  // 찜리스트 테이블
  const [zimList, setzimList] = useState([]);
  // 장바구니 리스트 테이블
  const [cartList, setcartList] = useState([]);

  // 검색어 유지용 스테이트
  const [searchInput, setsearchInput] = useState('');

  const classListPHP = 'http://jamm.dothome.co.kr/revolution_user/memberclasslist.php';
  const zimListPHP = 'http://jamm.dothome.co.kr/revolution_user/zim.php';
  const cartListPHP = 'http://jamm.dothome.co.kr/revolution_user/cart.php';
  const qnaListPHP = 'http://jamm.dothome.co.kr/revolution_user/answer.php';
  const statusListPHP = 'http://jamm.dothome.co.kr/revolution_user/status.php';

  const loginBase = () => {
    const userId = localStorage.setItem('loginInfo', userInfo);
  }

  const getData = () => {
    const userId = localStorage.getItem('loginInfo')
    if(userId) {
      setUserInfo(userId);
    } else {
      setUserInfo('');
    }
  }

  const fetchQnaList = async() => {
    try { // 응답 성공
      const response = await axios.get(qnaListPHP);
      console.log(response.data.qnalist, response.data.adqnalist);

      localStorage.setItem("myqnalist", JSON.stringify(response.data.qnalist));
 
      const qnaTable = JSON.parse(localStorage.getItem('myqnalist'));
      localStorage.setItem("adqnalist", JSON.stringify(response.data.adqnalist));

      const adQnaTable = JSON.parse(localStorage.getItem('adqnalist'));
      setQnalist(qnaTable)
      setadqnaList(adQnaTable);

    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

   const fetchcartList = async() => {
    try { // 응답 성공
      const response = await axios.get(cartListPHP);
      setcartList(response.data.cart);
      console.log(response);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  const fetchzimList = async() => {
    try { // 응답 성공
      const response = await axios.get(zimListPHP);
      setzimList(response.data.zim);
      console.log(response);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  const fetchClassList = async() => {
    try { // 응답 성공
      const response = await axios.get(classListPHP);
      setmemberClassList(response.data.memberclasslist);
      console.log(response);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  const fetchStatusList = async() => {
    try { // 응답 성공
      const response = await axios.get(statusListPHP);
      setStatus(response.data.statuslist);
      console.log(response);
      localStorage.setItem("status", JSON.stringify(response.data.statuslist));
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  useEffect(() => {
    fetchcartList();
    getData();
    fetchClassList();
    fetchzimList();
    fetchStatusList();
    fetchQnaList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    loginBase();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userInfo]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes basename='/revolution_user/'>

          <Route path='/' element={<Main userInfo={userInfo} />} />

          <Route path='/class/*' element={<Class 
          userInfo={userInfo}
          memberclasslist={memberclasslist} 
          cartList={cartList} setcartList={setcartList} />}/>

          <Route path='/login' element={<Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />

          <Route path='/register' element={<Register />} />

          <Route path='/mypage/*' element={<Mypage loginInfo={loginInfo} setLoginInfo={setLoginInfo} 
          userInfo={userInfo} setUserInfo={setUserInfo} qnalist={qnalist} setQnalist={setQnalist} 
          adqnaList={adqnaList} setadqnaList={setadqnaList} wirte={write} setWrite={setWrite}
          zimList={zimList} setzimList={setzimList} 
          memberclasslist={memberclasslist} 
          setmemberClassList={setmemberClassList}
          status={status} setStatus={setStatus}
          searchInput={searchInput} setsearchInput={setsearchInput}
          />} />



          <Route path='/update' element={<MypageUpdate />} />
          <Route path='/gnb' element={<Gnb />} />
          <Route path='/search/*' element={<Search memberclasslist={memberclasslist} searchInput={searchInput} setsearchInput={setsearchInput}/>} />

          <Route path='/cart' element={<Cart userInfo={userInfo} cartList={cartList} setcartList={setcartList} />} />

          <Route path='/chat' element={<Chatbot />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Nav />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
