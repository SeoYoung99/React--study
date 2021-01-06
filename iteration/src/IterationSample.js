import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  //<li>...</li>JSX코드로 된 배열을 새로 생성한 후 nameList에 담는다. DOM요소를 용해고 되고 컴포넌트를 사용해도 된다.
  return <u1>{nameList}</u1>;
};
export default IterationSample;
