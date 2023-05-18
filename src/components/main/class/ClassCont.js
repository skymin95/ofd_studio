import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ClassCont({classUser, id, key, title, price, level, instructor, desc, cartList, setcartList, cartAdd, setcartAdd}) {

  
  const userId = classUser; //회원 id
  const cMCnum = id; //MC_num
  
  const cartShoot = new FormData();
  cartShoot.append('id', userId);
  cartShoot.append('MC_num', cMCnum);
  cartShoot.append('b_title', title);
  cartShoot.append('b_price', price);
  cartShoot.append('b_level', level);
  cartShoot.append('b_instructor', instructor);

  const goCart = (e) => {
    e.preventDefault();
    const phpLink = 'http://jamm.dothome.co.kr/revolution_user/cart_add.php';
    axios.post(phpLink, cartShoot)
    .then((response) => {
        setcartAdd(false);
        console.log(response);
        if(response.data.success === true) {
          alert('업데이트에 성공했습니다!')
          setcartAdd(true);
          console.log(cartList);
        } else {
          alert('실패');
        }
      }
    )
  }

  return (
    <div className='r_card flex' key={key}>
      <span className='lev_tag'>{level}</span>
      <Link to={`/class/view/${id}`}>
        {/* php 멤버클래스 강사썸네일 */}
        <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`} alt="php타이틀" width='145' height='145' />
      </Link>
      {/* php 멤버클래스 강의명지애 */}
      <strong>{title}</strong>
      {/* php 멤버클래스 가격 */}
      <span className='class_price orange'>{price} won</span>
      <span className='c_desc'>{desc}</span>
      <span className='list_btn flex'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <button onClick={goCart}>장바구니</button>
      </span>
    </div>
  );
}

export default ClassCont;