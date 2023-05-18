import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MypagePurchase({setUserInfo, userInfo, status, setStatus, memberclasslist, setmemberClassList}) {

  const MyclassList = () => {
  const hasClassIdList = JSON.parse(userInfo);
  const hasClassId = hasClassIdList.id;
  
  const IhaveClass = status.filter((item) => {
    return item.id === hasClassId;
  });

  const PriceofClass = IhaveClass.reduce((result, item1) => {
    const matchingItem = memberclasslist.find(item2 => item1.MC_num === item2.MC_num);
    if (matchingItem) {
      result.push({ ...item1, ...matchingItem });
    }
    return result;
  }, []);
  
  if (PriceofClass.length === 0) {
    return IhaveClass;
  }
  setStatus(PriceofClass);
  }

  useEffect(() => {
    MyclassList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    status.map((item, index) => {
  return (
    <>
    <article className='payment_com'>
    <div className='flex'>
    <h3>결제완료</h3>
    <a href='#none'>상세보기     <FontAwesomeIcon icon={faAngleRight} /></a>
    </div>
    <div className='flex'>
    <p>[{item.MC_instructor}] {item.MC_title}</p>
    <p>{item.MC_price}원</p>
    </div>
    <p>결제일  {item.settingdata}</p>
    </article>
    </>
);
})
);
}
export default MypagePurchase;