import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MypageTab from './MypageTab';
import MypageClassRecent from './MypageClassRecent';
import MypageChallenge from './MypageChallenge';

function MypageWrap({searchInput, setsearchInput}) {
  return (
    <>
    <MypageTab /> 
    <Routes>
    <Route path='/' element={<MypageClassRecent />} />
    <Route path='/challenge' element={<MypageChallenge searchInput={searchInput} setsearchInput={setsearchInput}/>} />
    </Routes>
    </>
  );
}

export default MypageWrap;