import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function MypageQnaWrite({qnalist, setWrite, setQnaLoad }) {
  const navigate = useNavigate();
  const qnaPostlink = 'http://jamm.dothome.co.kr/revolution_user/qna_post.php';
  // const QnaUserInfo = JSON.parse(userInfo);
  const qnaGeto = localStorage.getItem('loginInfo');
  const QnaUserInfo = JSON.parse(qnaGeto);
  const qnaPostData = new FormData();
  const qnaId = QnaUserInfo.id; 

  const sortChange = (e) => {
    setSort(e.target.value);
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const day = today.getDate();
  console.log(qnalist);
  const qnaAll = Array.from(qnalist);
  
  const numArray = qnaAll.map(item => item.num);
  const maxNum = Math.max(...numArray);

  const todayDate = `${year}.${month}.${day}`;
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  qnaPostData.append('num',maxNum+1);
  qnaPostData.append('id', qnaId);
  qnaPostData.append('sort', sort);
  qnaPostData.append('title', title);
  qnaPostData.append('memo', memo);
  qnaPostData.append('regist_day', todayDate);
  const PostQna = (e) => {
    e.preventDefault();
    setWrite(false);
    axios.post(qnaPostlink, qnaPostData)
    .then((response) => {
      console.log(response.data)
      if(response.data.success === true ) {
        alert('문의글 등록이 완료되었습니다.');
        navigate('/mypage/qna');
        setWrite(true);
        setQnaLoad(true);
      } else {
        alert('실패');
      }
    })
  }

  
  return (
    <section id='qna_write'>
      <h2 className='hidden'>Qna</h2>
      <article>
      <h3>Q&A</h3>
      <div className='qnawirte_wrap'>

        <form action="" name='qna_write'>
        <div className='flex f_center'>
        <input type="radio" id="etc" name='sort' value='구매관련' onChange={sortChange}/>
        <label htmlFor="etc">기타사항</label>
        <input type="radio" id="relc" name='sort' value="기타사항" onChange={sortChange} />
        <label htmlFor="relc">강의관련</label>
        <input type="radio" id="relp" name='sort' value='강의관련' onChange={sortChange} />
        <label htmlFor="relp">구매관련</label>
        </div>

        <input type="text" name="qna_title" title='문의글 제목' placeholder='제목을 입력해 주세요.' onChange={(e) => setTitle(e.target.value)
          }/>
        <textarea name="qna_cont" title='문의글 내용' placeholder='내용을 입력해 주세요.'  onChange={(e) => setMemo(e.target.value)} ></textarea>
        <button onClick={PostQna} >
          문의등록
        </button>

        </form>
      </div>
      </article>
    </section>
  );
}

export default MypageQnaWrite;