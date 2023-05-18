import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import '../css/cart.css';

function SelectClassList({title, price, level, instructor, totalPrice, setTotalPrice, usercartList}) {
  const [checkbox, setCheckbox] = useState([]);
  const comma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div className='classlist'>
        <div>
          <label htmlFor='cart_chk1' className='flex'>
          <input type='checkbox' id='cart_chk1' onChange={(event) => {
              const checked = event.target.checked;
              if (checked) {
                // Number(setTotalPrice(price));
                // console.log(totalPrice);
                setCheckbox(checked);
                if(checkbox === true) {
                  setTotalPrice(price);
                  console.log(totalPrice);
                }
              } else {
                setTotalPrice(Number(totalPrice) - Number(price));
              }
            }}/>
            <Link to='/class/view'>
              <img src={`${process.env.PUBLIC_URL}/images/main/teacher.png`}  alt="강사사진" />
            </Link>
          </label>
        </div>

        <div className='c_txt'>
          <p>{instructor}</p>
          <h3 className='c_title2'>{title}</h3>
          <p className='class_level'>{level}</p>
          <p className='c_price'>{comma}원</p>
        </div>
      </div>
    </>
  );
}

export default SelectClassList;