import React from 'react';
import MypagePayments from './MypagePayments';
import MypagePurchase from './MypagePurchase';

function MypageReceipt({setUserInfo, userInfo, status, setStatus, memberclasslist, setmemberClassList}) {
  return (
    <div>
      <MypagePayments
    userInfo={userInfo} setUserInfo={setUserInfo}
    memberclasslist={memberclasslist} 
    setmemberClassList={setmemberClassList}
    status={status} setStatus={setStatus} />
      <MypagePurchase 
      userInfo={userInfo} setUserInfo={setUserInfo}
      memberclasslist={memberclasslist} 
      setmemberClassList={setmemberClassList}
      status={status} setStatus={setStatus}
      />
    </div>
  );
}

export default MypageReceipt;