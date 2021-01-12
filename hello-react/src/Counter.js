// input을 두개 받아서 + or - 버튼을 누르면  연산하기
import React, { useState } from "react"; //함수형 컴포넌트라 useState사용

const Counter = ({ role, children }) => {
  //props파라미터로 받기

  const [number, setNumber] = useState({ one: "", two: "" }); //객체 초기값
  const [result, setResult] = useState(""); //결과값

  const { one, two } = number; //객체

  const handleChange = (e) => {
    //input태그의 onClick이벤트에 넣어줄 핸들링 함수
    const next = {
      //객체 만들기
      ...number, //기본값 복사하고
      [e.target.name]: e.target.value, //새로운 값은 덮어씌우기 (name이 가리키는 값 (one or two)= 입력값)
    };
    setNumber(next); //만든 객체를 setNumber에 넣어줌
  };
  const handlePress = (e) => {
    //onKeyPress이벤트에 넣어줄 핸들링 함수
    if (e.key === "Enter") {
      alert(one + " 와 " + two + "가 입력되었습니다."); //팝업창
      setNumber({ one: "", two: "" }); //초기화
      setResult("");
    }
  };
  const handleSum = (e) => {
    //더하기 버튼의 onClick이벤트에 넣어줄 핸들링 함수
    setResult(parseInt(one) + parseInt(two)); //result 업데이트
  };
  const handleMin = (e) => {
    //빼기 버튼의 onClick이벤트에 넣어줄 핸들링 함수
    setResult(one - two);
  };

  return (
    <div>
      {role}하는{children}입니다.
      <div>
        <input
          name="one" //[e.target.name]
          value={one}
          placeholder="첫번째 숫자"
          onChange={handleChange}
        />
        <input
          name="two" //[e.target.name]
          value={two}
          placeholder="두번째 숫자"
          onChange={handleChange}
          onKeyPress={handlePress}
        />
        <button onClick={handleSum}>더하기</button>
        <button onClick={handleMin}>빼기</button>
        <h1>
          {one}와 {two}가 입력되었습니다. <br />
          결과값: {result}
        </h1>
      </div>
    </div>
  );
};
Counter.defaultProps = {
  role: "기본값",
};

export default Counter;
