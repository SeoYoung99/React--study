//프레젠테이셔널 컴포넌트
import React from "react";

const Counter = ({ onIncrease, onDecrease, number }) => {
  //받아온 props를 넣어서 UI 관리
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>+1</button>
    </div>
  );
};
export default Counter;
