import React from 'react';
import MypageLikes from './MypageLikes';

function MypageLikeslist({setUserInfo, userInfo, zimList, setzimList, memberclasslist}) {

  const zimIdArr = JSON.parse(userInfo);
  const zzimidUser = zimIdArr.id;
  
  // 사용자 아이디와 맞는 강의num 배열
  const filteredZimList = zimList.filter((item) => {
    return item.id === zzimidUser;
  });

  const filteredMemberclasslist = memberclasslist.filter((item) => {
    return filteredZimList.some((filteredZimItem) => filteredZimItem.MC_num === item.MC_num);
  });

  console.log(filteredMemberclasslist);

  return (
    <section className='likes_list'>
      <h2>찜한 강의 목록</h2>
      {filteredMemberclasslist.map((key)=>(
        <li key={key.MC_num} ><MypageLikes instructor={key.MC_instructor} level={key.MC_level} kind={key.MC_kind} title={key.MC_title} price={key.MC_price} zims={filteredMemberclasslist.length}  /></li>
      ))}
    </section>
  );
}

export default MypageLikeslist;