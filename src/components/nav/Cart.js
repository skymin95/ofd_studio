import React, {useState} from 'react';
import SelectClassList from './SelectClassList';
import PaymentPrice from './PaymentPrice';
import '../css/cart.css';

function Cart({userInfo, cartList, cartAdd, setcartAdd,  setcartList}) {
  
  const cartIdArr = JSON.parse(userInfo);
  const cartidUser = cartIdArr.id;
  
  //사용자 아이디와 맞는 강의num 배열
  const usercartList = cartList.filter((item) => {
    return item.id === cartidUser;
  });

  // 체크박스 가격더하기
  const [totalPrice, setTotalPrice] = useState('0');

  console.log(usercartList);

  return (
    <>
    <section className='cart_wrap'>
      <h2>장바구니</h2>
      {usercartList.map((key)=>(
        <SelectClassList key={key.b_key} title={key.b_title} price={key.b_price} level={key.b_level} instructor={key.b_instructor} cartAdd={cartAdd} setcartAdd={setcartAdd} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
      ))}
      <PaymentPrice totalPrice={totalPrice} usercartList={usercartList}/>
    </section>
    </>
  );
}

export default Cart;