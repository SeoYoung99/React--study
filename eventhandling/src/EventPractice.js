import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          onChange={(e) => {
            //onChange이벤트를 설정!!
            console.log(e);
            console.log(e.target.value); //값이 바뀔때마다 콘솔에 기록
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
