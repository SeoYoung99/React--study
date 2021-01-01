import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      {/* App.js의 <MyComponent>태그 사이의 내용을 보여줌 */}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};
export default MyComponent;
