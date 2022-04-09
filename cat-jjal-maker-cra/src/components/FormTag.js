import React from "react";

const FormTag = ({updateMainCat}) => {
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);  //한글 입력한지 확인 하는 정규식
    const [errorMsg, setErrorMsg] = React.useState('');
    const [value, setValue] = React.useState('');
  
    function handleInputChange(e) {
      const userValue = e.target.value;
      console.log("userValue:",includesHangul(userValue));
      console.log(e.target.value.toUpperCase());   //대문자로 변경하는 기능
  
      if(includesHangul(userValue)) setErrorMsg("한글은 입력 할 수 없습니다.");
      else setErrorMsg("");
  
      setValue(e.target.value.toUpperCase());
    }
  
    function handleFormSubmit(evt) {
     evt.preventDefault();
  
      setErrorMsg("");
      if(value === "") {
        setErrorMsg("빈 값으로 만들 수 없습니다.");
        return;
      }
      
      updateMainCat(value);
    }
    return (
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="영어 대사를 입력해주세요" 
          onChange={handleInputChange} 
          value={value} 
        />
        <button type="submit">생성</button>
        <p style={{color:"red"}}>{errorMsg}</p>
      </form>
    );
  };

  export default FormTag;