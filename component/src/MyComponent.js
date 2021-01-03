import React from "react";
import PropTypes from "prop-types";
//필수 props를 지정하거나 props의 타입을 지정할 때 사용

const MyComponent = ({ name, children }) => {
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

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
