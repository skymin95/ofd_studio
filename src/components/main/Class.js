import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import '../css/class.css';
import ClassList from './class/ClassList';
import ClassView from './class/ClassView';


function Class({memberclasslist, userInfo, cartList, setcartList, cartAdd, setcartAdd}) {

  const [select, setselect] = useState("recently");

  // 셀렉트옵션 최신순
function sortDate2(list) {
	const sorted_list = list.sort(function(a, b) {
		return new Date(a.MC_registdata).getTime() - new Date(b.MC_registdata).getTime();
	}).reverse();
    return sorted_list;
}

  //셀렉트옵션 가격낮은순을 위한 10만원대자리수 콤마 끊기
function getPrice(priceStr){
  return Number(priceStr.slice(-priceStr.length,-4) + priceStr.slice(-3))
}

  //셀렉트옵션 가격낮은순
function sortByLowPrice(arr){
  const sortedArr = arr.slice();
  for(let i = 0 ; i < sortedArr.length ; i++){
    let swap;
    for(let j = 0; j < sortedArr.length - 1 - i ; j++){
      if(getPrice(sortedArr[j].MC_price) > getPrice(sortedArr[j + 1].MC_price)){
        swap = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = swap;
      }
    }
    if(!swap){
      break;
    }
  }
  return sortedArr;
}

//탭메뉴 강사정렬
function sortInst(arr){
  return arr.sort((a, b) => a.MC_instructor.localeCompare(b.MC_instructor));
}
//탭메뉴 레벨정렬
function sortLev(arr){
  return arr.sort((a, b) => a.MC_level.localeCompare(b.MC_level));
}
//탭메뉴 장르정렬
function sortKind(arr){
  return arr.sort((a, b) => a.MC_kind.localeCompare(b.MC_kind));
}

  return (
    <div>
        <Routes>
          
          <Route path='/' element={<ClassList cartAdd={cartAdd} setcartAdd={setcartAdd} cartList={cartList} setcartList={setcartList} userInfo={userInfo} memberclasslist={memberclasslist} select={select} setselect={setselect} sortDate2={sortDate2} sortByLowPrice={sortByLowPrice} sortInst={sortInst} sortLev={sortLev} sortKind={sortKind} />} />
          <Route path='view/:viewId' element={<ClassView setcartList={setcartList} userInfo={userInfo} memberclasslist={memberclasslist} />} />
          

        </Routes>
    </div>
  );
}

export default Class;