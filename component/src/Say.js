import React, { useState } from "react";
//함수형 컴포넌트에서는 useState사용
const Say = () => {
  const [message, setMessage] = useState(""); //useState의 인자에는 상태의 초기값을 넣어줌
  //useState함수를 호출하면 배열이 반환
  //( 첫번째 원소는 현재상태->message, 두번째 원소는 상태를 바꿔주는 함수->setMessage)
  //const onClickEnter = () => setMessage("안녕하세요");
  //const onClickLeave = () => setMessage("안녕히 가세요");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={() => setMessage("안녕하세요")}>입장</button>
      <button onClick={() => setMessage("안녕히 가세요")}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑색
      </button>
    </div>
  );
};

export default Say;
