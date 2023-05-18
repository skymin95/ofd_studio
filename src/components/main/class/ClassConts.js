import React from 'react';
import ClassCont from './ClassCont';

function ClassConts({cartAdd, setcartAdd, cartList, setcartList, userInfo, memberclasslist, select, sortDate2, sortByLowPrice, sortInst, sortLev, sortKind}) {

    const classUserArr = JSON.parse(userInfo);
    const classUser = classUserArr.id; 
    

  return (
    <>
        <ul className='cards flex'>
          {select === "recently" ? sortDate2(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
          {select === "zim" ? sortDate2(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} classUser={classUser} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
          {select === "lowPrice" ? sortByLowPrice(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} classUser={classUser} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
          {select === "강사" ? sortInst(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} classUser={classUser} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
          {select === "레벨" ? sortLev(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} classUser={classUser} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
          {select === "장르" ? sortKind(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} classUser={classUser} id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} instructor={items.MC_instructor} />
          </li>
          ):null}
        </ul>
    </>
  );
}

export default ClassConts;