import React, { useEffect } from 'react';
import '../../css/mypage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MypageQnaView({qnalist, setQnalist, adqnaList  }) {
  const QnaFilterPlz = () => {
    const qnaFilter = qnalist.map(item1 => {
      const matchingItems = adqnaList.filter(item2 => item1.num === item2.num);
      if (matchingItems.length > 0) {
        return { ...item1, ...matchingItems[0] };
      }
      return item1;
    });
    const QnaUserSummary = localStorage.getItem('loginInfo');
    const QnaUser = JSON.parse(QnaUserSummary);
    console.log(QnaUser);
    const QnaUserId = QnaUser.id;
    const MyQnaFilter = qnaFilter.filter(item => item.id === QnaUserId);
    // qnaList 값 저장
    setQnalist(MyQnaFilter);
  }

  useEffect(()=> {
    QnaFilterPlz();
  },[]);

  return (
    qnalist.map((item, index) => {
      const uniqueId = `qna_view_${index}`;

      return (
        <div className='qnaview_wrap' key={index}>
            <label htmlFor={uniqueId}>
              <p className='qna_title'>{item.title}
              <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
              </p>
            </label>
            <input type="checkbox" name="qna" id={uniqueId} className='hidden open' />
            <div className='qnaview_box'>
              <div className='flex qna_top'>
                <div className='qna_col'>분류</div>
                <div>{item.sort}</div>
                <div className='qna_col'>작성일</div>
                <div>{item.regist_day}</div>
                <div className='qna_col'>답변여부</div>
                <div>{item.r_have}</div>
              </div>
              <div className='qna_cont'>
                <p>{item.memo}</p>
              </div>
              <div className='reply_view flex'>
                <div>Re : {item.aq_t}</div>
                <div>작성일</div>
                <div>{item.aq_date}</div>
              </div>
              <div className='reply_cont'>
                <p>{item.aq_memo}</p>
              </div>
            </div>
        </div>
      );
    })
  );
}

export default MypageQnaView;