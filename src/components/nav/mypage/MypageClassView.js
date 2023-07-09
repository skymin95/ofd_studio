import React from 'react';
import { useParams } from "react-router-dom";
import '../../css/myclass.css';
import ClassViewRelated from '../../main/class/ClassViewRelated';
import QnaMove from '../../main/qna/QnaMove';

function MypageClassView({memberclasslist}) {

  const {lessonId} = useParams();

  let lessonNum = memberclasslist.find(function(item) {
    return item.MC_num === lessonId;
});

  console.log(lessonNum);

  return (
    <section id="myclass_view">
    <h2 className="hidden">내 강의 보기 페이지</h2>
    <article>
      <h3>
      {lessonNum.MC_music}
      {/* <!-- php --> */}
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className="mycinfo_wrap flex">
      <div className="mycinfo_detail">
            <div className="flex">
              <p>Instructor</p>
              {/* <!--php --> */}
              <p>{lessonNum.MC_instructor}</p>
            </div>

            <div className="flex">
              <p>level</p>
              {/* <!--php --> */}
              <p>{lessonNum.MC_level}</p>
            </div>

            <div className="flex">
              <p>genre</p>
              {/* <!--php --> */}
              <p>{lessonNum.MC_kind}</p>
            </div>

            <div className="flex">
              <p>곡 정보</p>
              {/* <!--php --> */}
              <p>{lessonNum.MC_music}</p>
            </div>
          </div>   
        <div className="mycinfo_const flex">
          <div className="my_const">
          <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`}  alt="강사 이미지" />
            <p>{lessonNum.MC_instructor}</p>
          </div>
        </div>

        </div>
    </article>

    <article className='myclass_cont'>
      <h3 class="hidden">강의내용</h3>
      <div className='flex myclass_cond'>
        <h3>강의내용</h3>
      </div>
      <p className='myclass_desc'>
        {/* <!-- php--> */}
        {lessonNum.MC_desc}
      </p>
        {/* <!-- php--> */}
    </article>
    <ClassViewRelated memberclasslist={memberclasslist} level={lessonNum.MC_level} kind={lessonNum.MC_kind} />
    <QnaMove />
    </section>
  );
}

export default MypageClassView;