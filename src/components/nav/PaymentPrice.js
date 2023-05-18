import React from 'react';
import '../css/cart.css';

function PaymentPrice({totalPrice, usercartList}) {
  
  let cartPrice = 0;

  usercartList.forEach((item) => {
    return cartPrice += Number(item.b_price);
  });
  console.log(usercartList);

  const comma = cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
    <form method='post' action='cart.php'>
      <div className='payment_con'>
          <p className='p_title'>결제할 상품 총 1개</p>     
          <p className='p_price'>총 상품 금액 <span>{comma}원</span></p>
          <p>결제 금액 <span>{totalPrice}원</span></p>
          <input type="submit" id='payment_btn' value="결제하기"/>
          <a href='#none' className='txt_tag'>결제 안내 유의사항 + </a>
      </div>
    </form>
    </>
  );
}

export default PaymentPrice;