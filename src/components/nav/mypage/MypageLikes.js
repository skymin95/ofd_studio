import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MypageLikes({instructor, level, kind, title, price, zims} ) {
  const comma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className='mylikes'>
      <div className='flex'>
      <ul className='flex'>
        <li>{instructor}</li>
        <li>{level}</li>
        <li>{kind}</li>
      </ul>
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </div>
      <div className='class_info flex'>
      <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강의 썸네일" />
      <div className='class_infod'>
        <p>{title}</p>
        <p>{comma}원</p>
        <p className='flex'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <span>{zims}+</span>
        </p>
      </div>
      </div>
    </div>
  );
}

export default MypageLikes; 