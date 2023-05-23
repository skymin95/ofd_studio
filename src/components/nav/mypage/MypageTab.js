import React, {useState} from 'react';
import  { Link } from 'react-router-dom';
import '../../css/myclass.css';
// import MypageClassRecent from './MypageClassRecent';

function MypageTab(props) {
  const [selectedTab, setSelectedTab] = useState('/mypage');
  return (
    <>
      <section id="mypage_tab">
        <h2 className='hidden'>마이페이지 탭메뉴</h2>
        <article>
        <h3 className='hidden'>마이페이지 탭메뉴</h3>
        <div className='flex'>
        <p>
        My
        </p>
        <ul className='flex'>
          <li>
          <Link to='/mypage'  onClick={() => setSelectedTab('/mypage')}
          className={selectedTab === '/mypage' ? 'selected' : ''}>Class</Link>
          </li>
          <li>
          <Link to='/mypage/challenge' onClick={() => setSelectedTab('/mypage/challenge')}
          className={selectedTab === '/mypage/challenge' ? 'selected' : ''}><span>Challenge</span></Link>
          </li>
        </ul>
        </div>
        </article>
      </section>

      {/* <section id="myclass_rec">
        <h3 className='hidden'>최근 본 강의</h3>
        <article>
        <h3>최근 본 강의</h3>
        <div className='flex'>
        {/* section의tabmenu my class 일 때만 활성화(추후 리액트로 구현) setmode */}
        {/* </div>
        </article>
      </section>  */}


    </>
  );
}

export default MypageTab;