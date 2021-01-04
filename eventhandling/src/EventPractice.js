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
          //이거 왜 한거임...?
          onChange={(e) => {
            // onChange이벤트를 설정!!
            this.setState({
              // state 업데이트
              message: e.target.value, // state의 message를 input값으로
            });
          }}
        />
        <button
          onClick={
            //클릭이벤트가 발생하면 현재comment값(message)을 메시지박스로 띄우고 다시 공백으로 설정
            () => {
              alert(this.state.message);
              this.setState({
                message: "",
              });
            }
          }
        >
          확인
        </button>
      </div>
    );
  }
}
export default EventPractice;
