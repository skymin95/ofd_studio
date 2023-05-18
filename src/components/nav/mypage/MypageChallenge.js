import React from 'react';
import Hotkey from '../Hotkey';

function MypageChallenge({searchInput, setsearchInput}) {
  return (
    <section>
    <div className='flex chall_box'>
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    <img src={`${process.env.PUBLIC_URL}/images/myclass/mychallenge1.png`}  alt="챌린지 이미지" className='challeng_img' />
    </div>
    <Hotkey title='팔로우를 통해 더 많은 챌린지 영상 소식을 받아 보세요!' searchInput={searchInput} setsearchInput={setsearchInput}/>
    </section>
  );
}

export default MypageChallenge;