import React, {useEffect} from 'react';


function MypagePayments({setUserInfo, userInfo, status, setStatus, memberclasslist, setmemberClassList}) {

  const TotalList = () => {
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
      TotalList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <h2 className='payment_t'>구매내역</h2>
      <article className='payment_list'>
        <table>
          <caption>구매내역</caption>
          <thead>
            <th>총 구매건 수</th>
            <th>환불 진행건 수</th>
            <th>환불 완료건 수</th>
          </thead>
          <tbody>
            <td className='total'>{status.length}</td>
            <td className='refund'>0</td>
            <td className='refund_com'>0</td>
          </tbody>
        </table>
      </article>

  
    </>
  );
}

export default MypagePayments;