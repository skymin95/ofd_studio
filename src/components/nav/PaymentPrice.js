import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';

function PaymentPrice({totalPrice, usercartList}) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const comma = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  console.log(usercartList);  
  const getNow = new Date();
  const y = getNow.getFullYear();
  const m = getNow.getMonth()+1;
  const d = getNow.getDate();

  const myId = usercartList[0].id;
  const classIds = usercartList.map((item) => item.MC_num);
  const progress = '00:00';
  const todayNow = `${y}.${m}.${d}`;

  const getClasslink = 'http://jamm.dothome.co.kr/revolution_user/getclass.php';

  const GetMineClass = (e) => {
  e.preventDefault();

  const formDataArray = classIds.map((classId) => {
    const formData = new FormData();
    formData.append('id', myId);
    formData.append('MC_num', classId);
    formData.append('progress', progress);
    formData.append('settingdata', todayNow);
    return formData;
  });

  const axiosRequests = formDataArray.map((formData) => {
    return axios.post(getClasslink, formData);
  });

  axios.all(axiosRequests)
    .then((responses) => {
      console.log(responses);
      const isSuccess = responses.every((response) => response.data.success === true);
      if (isSuccess) {
        alert('구매가 완료되었습니다.');
        navigate('/mypage/');
      } else {
        alert('실패');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

  useEffect(() => {
    const calculatedTotalPrice = usercartList.reduce((acc, item) => {
      const price = parseInt(item.b_price.replace(/,/g, ''));
      return acc + price;
    }, 0);
  
    setTotal(calculatedTotalPrice);
    console.log(total);
  }, [])
  return (
    <>
    <form method='post' action='cart.php'>
      <div className='payment_con'>
          <p className='p_title'>결제할 상품 총 {usercartList.length}개</p>     
          <p className='p_price'>총 상품 금액 <span>{comma}원</span></p>
          <p>결제 금액 <span>{comma}원</span></p>
          <input type="button" id='payment_btn' value="결제하기" onClick={GetMineClass}/>
          <a href='#none' className='txt_tag'>결제 안내 유의사항 + </a>
      </div>
    </form>
    </>
  );
};

export default PaymentPrice;