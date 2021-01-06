import React, { useState } from "react";

const IterationSample = () => {
  /* 1. 초기 상태 렌더링 */
  const [names, setNames] = useState([
    //세 가지 상태(useState)를 사용
    { id: 1, text: "눈사람" }, // 1) 데이터 배열 name (객체로 이루어짐)
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState(""); // 2) 텍스트를 입력할 수 있는 input
  const [nextId, setNextId] = useState("5"); // 3) 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value); //onChange: 입력한 값을 inputText에 업데이트

  /* 2. 데이터 추가 기능 */
  const onClick = () => {
    const nextNames = names.concat({
      //nextNames: id는 nextId이고 text는 inputText인 새로운 name 배열
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId+1을 업데이트
    setNames(nextNames); //위에서 만든 배열을 업데이트
    setInputText(""); //inputText 초기화
  };

  /* 3. 데이터 제거 기능 */
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    //배열 내장 함수 filter사용: 원하는 원소만 분류, 제외
    setNames(nextNames); //분류한 값은 다시 업데이트
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <u1>{nameList}</u1>
    </>
  );
};
export default IterationSample;
