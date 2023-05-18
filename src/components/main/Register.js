import React ,{useEffect, useState}from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Register =()=> {
  
  
  
  //약관동의 초기값
  const [allOkay, setAllOkay] = useState(false);
  const [marKeting, setMarKeting] = useState(false);
  const [inForm, setInForm] = useState(false);
  
  
  //1.상태초기값 세팅
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  //2.오류메시지 전달 위한 상태값
  const [idMessage, setIdMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [pw2Message, setPw2Message] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  // 3.유효성 검사
  const[isId, setIsId] = useState(false);//eslint-disable-line no-unused-vars
  const[ispw, setIsPw] = useState(false);//eslint-disable-line no-unused-vars
  const[ispw2, setIsPw2] = useState(false);//eslint-disable-line no-unused-vars
  const[isname, setIsName] = useState(false);//eslint-disable-line no-unused-vars
  const[isphone, setIsPhone] = useState(false);//eslint-disable-line no-unused-vars
  const[isEmail, setIsEmail] = useState(false);//eslint-disable-line no-unused-vars
  
  //input값에 따른 조건 걸어주기 유효성검사
  const idRegExp = /^[a-zA-z0-9]{4,20}$/; //4-20자까지
  const onChangeId =(id)=>{
    const currentId = id.target.value;
    setId(currentId);


    if(!idRegExp.test(currentId)){
      setIdMessage("4-20사이 대소문자 또는 숫자만 입력해주세요!");
      setIsId(false);
    }else{
      setIdMessage("사용가능한 아이디입니다.");
      setIsId(true);
    }
  };

  const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const onChangePw = (pw) => {
    const currentPw = pw.target.value;
      setPw(currentPw);
      if(!pwRegExp.test(currentPw)){
        setPwMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
        );
        setIsPw(false);
      }else{
        setPwMessage("사용가능한 비밀번호입니다.");
        setIsPw(true);
      }
  };
  
  const onChangePw2 = (pw2) => {
    
    const currentPw2 = pw2.target.value;
    setPw2(currentPw2);
    if(pw !== pw2){
      setPw2Message("비밀번호가 일치하지 않습니다.");
      setIsPw2(false);
    }else{
      setPw2Message("비밀번호가 일치합니다.");
      setIsPw2(true);
    }
};

  const onChangeName = (name)=>{
    const currentName = name.target.value;
    setName(currentName);

    if(!currentName){
      setNameMessage("이름을 입력해주세요/")
      setIsName(false);
    }else{
      setNameMessage("사용가능한 이름입니다.");
      setIsName(true);
    }
  }

  const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const onChangePhone = (콜)=>{
    const currentPhone = phone.target.value;
    setPhone(currentPhone);

    if(!phoneRegExp.test(currentPhone)){
      setPhoneMessage("올바른 형식이 아닙니다.")
      setIsPhone(false);
    }else{
      setPhoneMessage("사용가능한 번호입니다.");
      setIsPhone(true);
    }
  };

  const EmailRegExp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const onChangeEmail = (email) => {
      const currentEmail = email.target.value;
      setEmail(currentEmail);
  
  if(!EmailRegExp.test(currentEmail)){
    setEmailMessage("중복된 이메일입니다.");
    setIsEmail(false);
  }else{
    setEmailMessage("사용 가능한 이메일입니다.")
    setIsEmail(true);
  }

};

  
  const onChangeGender =(gender)=>{
    const currentGender = gender.target.value;
    setGender(currentGender);
  }


  //약관동의 체크
  const marKetingBtn=()=>{
    if(marKeting === false){
      setMarKeting(true)
    }else{
      setMarKeting(false)
    }
  };

  const inFormBtn =()=>{
    if(inForm === false){
      setInForm(true)
    }else{
      setInForm(false)
    }
  };
  const allBtn =()=>{
    if(allOkay === false){
      setAllOkay(true);
      setMarKeting(true);
      setInForm(true);
    }else{
      setAllOkay(false);
      setMarKeting(false);
      setInForm(false);
    }
  };
  useEffect(()=>{    
    if(marKeting === true && inForm === true){
      setAllOkay(true);
    }else{
      setAllOkay(false)
    }
  },[marKeting,inForm])
  




  //axios
  const phpLink = 'http://jamm.dothome.co.kr/revolution_user/register.php';

//   const formdata = new FormData();
//     formdata.append('id', id);
//     formdata.append('pw', pw);
//     formdata.append('pw2', pw);
//     formdata.append('name', name);
//     formdata.append('phone', phone);
//     formdata.append('email', email);
//     formdata.append('gender', gender);

// const RegisterBtn = (e) => {
//   e.preventDefault();
//   axios.post(phpLink, formdata)
//   .then((response) => {
//     setRegisterInfo(response.data.success); // 데이터 석세스 값을 먼저 받아온다.
//     if(registerInfo === true) {
//     const id = response.data.id;
//     const pw = response.data.pw;
//     const name = response.data.name;
//     const gender = response.data.gender;
//     const phone = response.data.phone;
//     const email = response.data.email;
//     const profile = response.data.profile;
//     const regist_day = response.data.regist_day;
//     const users = JSON.stringify({"id": id,"pw":pw,  "name" : name ,"gender":gender, "phone":phone, "email" : email ,"profile_img" : profile, "regist_day":regist_day})
//     localStorage.setItem("loginInfo", users);
//     console.log(users); 
//   } else {
//     alert('빈곳이 없는지 확인해주세요');
//   }
//  })
// }
  const RegisterBtn = (e) =>{
    //입력값
    const isValidInput = name.length >=1 && phone.length >=1; 
    e.preventDefault();

    axios.post(phpLink, {
      id:id,
      pw:pw,
      pw2:pw2,
      name:name,
      gender:gender,
      phone:phone,
      email:email
    })
    .then((response)=>{
      if(
        !isValidInput ||
        !idRegExp ||
        !pwRegExp ||
        !phoneRegExp ||
        !EmailRegExp
        
      ){
        alert('입력하지 않은 곳이 있는지 확인해주세요');
      }
      else{
        alert('회원가입이 완료되었습니다.');
        navigate('/login'); //로그인 페이지로 리다이렉션
      }    

  })}

  return (
    
    <section class="register">
      <h2>회원가입</h2>
      <article>
      <h3>
      이용약관
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      <div className='terms'>
        <p> 이용 약관: 이 조건은 웹사이트 또는 서비스의 이용에 관한 것입니다. 
          여기에는 이용 허가, 제한, 금지 사항 및 기타 관련 사항이 포함될 수 있습니다. </p>
      </div>
      </h3>
      <form name="register" >
      <div className='okay'>
      <p className='flex'>
      <input type="checkbox" name="marketing" id="marketing" checked={marKeting} onChange={marKetingBtn}/>
      <label htmlFor="marketing">마케팅 문자 수신 동의 (선택)</label>
      </p>
      <p className='flex'>
      <input type="checkbox" name="inform" id="inform" checked={inForm} onChange={inFormBtn}/>
      <label htmlFor="inform">개인 정보 수집 동의 (필수)</label>
      </p>
      </div>
      <p className='flex allokay'>
      <input type="checkbox" name="allokay" id='allokay' checked={allOkay} onChange={allBtn}/>
      <label htmlFor="allokay">모두 동의</label>
      </p>

    <div className='register_wrap'>
    <input 
      type="text" 
      name="id" 
      title='아이디' 
      placeholder='아이디를 입력해주세요' 
      value={id}
      onChange={onChangeId} autoFocus/>
      <p>{idMessage} </p>
      {/* id메시지 */}
    <input 
      type="password" 
      name="pw" 
      title='비밀번호'  
      placeholder='비밀번호' 
      value={pw}
      onChange={onChangePw}/>
      <p>{pwMessage}</p>
    <input 
      type="password" 
      name="pw2" 
      title='비밀번호 확인' 
      placeholder='비밀번호 확인' 
      value={pw2}
      onChange={onChangePw2}/>
      <p>{pw2Message}</p>
    <input 
      type="text" 
      name="name" 
      title='이름' 
      placeholder='이름' 
      value={name}
      onChange={onChangeName}/>
      <p>{nameMessage}</p>
    <input 
      type="tel" 
      name="phone" 
      title='전화번호' 
      placeholder='전화번호' 
      value={phone}
      onChange={onChangePhone}/>
      <p>{phoneMessage}</p>
    <input 
      type="email" 
      name="email" 
      title='이메일' 
      placeholder='이메일' 
      value={email}
      onChange={onChangeEmail}/>
      <p>{emailMessage}</p>
    <select name="gender" title='성별' placeholder='성별' value={gender} onChange={onChangeGender}>
      <option value="성별">성별</option>
      <option value="0">남</option>
      <option value="1">여</option>
    </select>
    <input type="submit" className='r_btn'  onClick={RegisterBtn} value="회원가입"/>
    </div>
    
      </form>
      </article>
    </section>
  );
}

export default Register;