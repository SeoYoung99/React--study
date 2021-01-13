import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  //로컬변수의 초기값 설정
  const setId = (n) => {
    id.current = n; //로컬변수를 수정하는 함수
  };
  const printId = () => {
    console.log(id.current); //로컬변수 조회
  };
  return <div>refsample</div>;
};
export default RefSample;
