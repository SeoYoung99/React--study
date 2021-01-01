import React from "react";

const MyComponent = (props) => {
  const { name, children } = props; //props라고 선언 (비구조화 할당 문법)
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};
export default MyComponent;
