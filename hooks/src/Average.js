import React, { useState } from "react";

const getAverage = (numbers) => {
  //평균을 계산하는 함수
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  //list, number (state 2개)

  const onChange = (e) => {
    setNumber(e.target.value); //input들어오면 입력값을 number에 업데이트
  };
  const onInsert = (e) => {
    //버튼 핸들링 메서드
    const nextList = list.concat(parseInt(number)); //number를 추가한 새 배열 만들어서 list 업데이트
    setList(nextList);
    setNumber(""); //number는 초기화
  };
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <u1>
        {list.map((val, index) => (
          <li key={index}>{val}</li> //list의 원소들을 <li>{원소}<li> 형식으로 만들어줌
        ))}
      </u1>
      <div>
        <b>평균값: </b>
        {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
