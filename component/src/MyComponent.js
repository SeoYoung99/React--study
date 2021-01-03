import React, { Component } from "react";
import PropTypes from "prop-types";
//필수 props를 지정하거나 props의 타입을 지정할 때 사용

class MyComponent extends Component {
  static defaultProps = {
    //class내부에서 defaultProps지정
    name: "defaultname",
  };
  static propTypes = {
    //class내부에서 propTypes지정
    name: PropTypes.string,
    favoritenumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoritenumber, children } = this.props;
    //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoritenumber}입니다.
      </div>
    );
  }
}
/*
MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoritenumber: PropTypes.number.isRequired,
};
*/
export default MyComponent;
