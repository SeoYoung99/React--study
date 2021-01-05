import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value, //입력을 password로 업데이트
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true, //클릭됨
      validated: this.state.password === "0000", //코드 확인
    });
    this.input.focus(); //포커스를 input에
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          //콜백함수로 ref 달아줌 -> 이제 this.input이 컴포넌트 내부의 input요소를 가리키게 됨
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            //css에서 className으로 접근
            this.state.clicked //클릭되면 아래줄 실행, 아니면 비어있는 문자열 전달
              ? this.state.validated //유효하면 success, 아니면 failure가 className으로 설정
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
