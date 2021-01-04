import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  }; //constructor없이 초기값 설정

  handleChange = (e) => {
    //임의메서드
    this.setState({
      [e.target.name]: e.target.value,
      //input의 name을 가리킨다.
    });
  };

  handleClick = () => {
    //임의메서드
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //Enter가 눌리면
      this.handleClick(); //메소드 실행
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트연습 - input 여러개</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username} //input의 value = state에 있는 값
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메시지를 입력하세요."
          value={this.state.mesage} //input의 value = state에 있는 값
          onChange={this.handleChange}
          onKeyPress={this.handleClick} //onKeyPress 이벤트 핸들링
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
