import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "", //constructor없이 초기값 설정
  };
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message} //input의 value = state에 있는 값
          onChange={(e) => {
            // onChange이벤트를 설정!!
            this.setState({
              // state 업데이트
              message: e.target.value, // state의 message를 inpur값으로
            });
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
