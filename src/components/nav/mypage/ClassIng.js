import React from 'react';
import { Link } from "react-router-dom";

import Progressbar from './Progressbar';

function ClassIng({id, MC_num, progress, settingdata, MyIdClassFilter, memberclasslist, setmemberClassList, status, setStatus, userInfo}) {

  let classId = memberclasslist[MC_num].MC_num;
  let totalTime = memberclasslist[MC_num].MC_time;
  let currentTime = progress;

  const totalSeconds = parseInt(totalTime.replace(/:/g, "")) * 60;
  const currentSeconds = parseInt(currentTime.replace(/:/g, "")) * 60;

  const progressPercent = (currentSeconds / totalSeconds) * 100;
  const roundedProgressPercent = Math.round(progressPercent * 10) / 10;

  console.log(memberclasslist[MC_num].MC_time);
  console.log(progress);

  const date = new Date(settingdata);
  date.setMonth(date.getMonth() + 1);

  const nextMonthDate = date.toLocaleDateString();

  return (
    <div className='class_ing'>
      <strong>
        {/* php 타이틀 */}
        {memberclasslist[MC_num].MC_title}
      </strong>
      <p>
        {/* 강사명 레벨 장르 */}
        {memberclasslist[MC_num].MC_instructor} | {memberclasslist[MC_num].MC_level} | {memberclasslist[MC_num].MC_kind}
      </p>
      <p className='flex'>
        {/* 진도율 상태관리 진행시간 */}
        <p><span>진도율</span><span className='margin'>{roundedProgressPercent}%</span></p>
        <span></span>
      </p>
      <Progressbar per={roundedProgressPercent}/>
      <p className='flex'>
        <span>만료일<span className='margin'>{nextMonthDate}</span></span><Link to={`/mypage/myclassroom/${classId}`} >강의 이어보기</Link>
      </p>
    </div>
  );
}

export default ClassIng;