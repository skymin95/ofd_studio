import React, {useEffect} from 'react';

import Progressbar from './Progressbar';

function ClassIng({userInfo, memberclasslist, setmemberClassList, status, setStatus}) {

  const TotalClassList = () => {
    const TotalhasClass = JSON.parse(userInfo);
    const MyIdClass = TotalhasClass.id;
    
    const MyIdClassFilter = status.filter((item) => {
      return item.id === MyIdClass;
    });
    console.log(MyIdClassFilter);
    const MyIdClassFiltered = MyIdClassFilter.reduce((result, item1) => {
      const matchingItem = memberclasslist.find(item2 => item1.id === item2.id);
      if (matchingItem) {
        result.push({ ...item1, ...matchingItem });
      }
      return result;
    }, []);
    
    if (MyIdClassFiltered.length === 0) {
      return MyIdClassFiltered;
    }
    setStatus(MyIdClassFiltered);
    // arr.forEach(item => {
    //   // settingdata 값을 Date 객체로 변환
    //   const settingDate = new Date(item.settingdata);
    
    //   // 한 달 뒤의 날짜를 구하기 위해 현재 날짜에 1달(30일)을 더함
    //   const oneMonthLater = new Date(settingDate.getFullYear(), settingDate.getMonth() + 1, settingDate.getDate());
    
    //   // expiredate 속성으로 한 달 뒤의 날짜를 추가
    //   item.expiredate = oneMonthLater.toISOString().split('T')[0]; // 날짜를 ISO 문자열로 변환하여 저장
    // });
  }
   
  useEffect(() => {
    TotalClassList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='class_ing'>
      <strong>
        {/* php 타이틀 */}
        {status.MC_title}
      </strong>
      <p>
        {/* 강사명 레벨 장르 */}
        {status.MC_instructor} | {status.MC_level} | {status.MC_kind}
      </p>
      <p className='flex'>
        {/* 진도율 상태관리 진행시간 */}
        <p><span>진도율</span><span className='margin'>90%</span></p>
        <span></span>
      </p>
      <Progressbar per='90'/>
      <p className='flex'>
        <span>만료일<span className='margin'>2023.05.04</span></span><button>강의 이어보기</button>
      </p>
    </div>
  );
}

export default ClassIng;