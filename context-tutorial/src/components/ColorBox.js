// ColorContext 안에 들어있는 색상을 보여준다
// 색상을 props로 받아오는 것이 아니라 Colorcontext 안에 들어있는 Consumer라는 컴포넌트를 통해 조회
import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        //consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어줌
        //컴포넌트의 children이 잇어야 할 자리에 JSX 혹은 문자열이 아닌 함수를 전달
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};
export default ColorBox;
