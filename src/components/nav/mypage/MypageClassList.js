import React from 'react';

import ClassIng from './ClassIng';

function mypageClassList({userInfo, memberclasslist, setmemberClassList, status, setStatus}) {
  
  const TotalhasClass = JSON.parse(userInfo);
  const MyIdClass = TotalhasClass.id;
  
  const MyIdClassFilter = status.filter((item) => {
    return item.id === MyIdClass;
  });
  
  console.log(MyIdClassFilter);

  return (
    <article className='myclass_list'>
      {/* 프로필 */}
      <strong>
        나의 강의목록
      </strong>
      <ul className='myclass_tab flex'>
        <li>
          전체 강의
        </li>
        <li>
          진행중
        </li>
        <li>
          종료된 강의
        </li>
      </ul>

      {MyIdClassFilter.map((key)=>(
        <ClassIng id={key.MC_num} MC_num={key.MC_num}  userInfo={userInfo} progress={key.progress} settingdata={key.settingdata} memberclasslist={memberclasslist} 
        setmemberClassList={setmemberClassList}
        status={status} setStatus={setStatus} />
      ))}

    </article>
  );
}

export default mypageClassList;