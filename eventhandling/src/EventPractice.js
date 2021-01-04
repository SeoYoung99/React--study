import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "", //constructor없이 초기값 설정
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // 임의메서드가 이벤트로 등록되는 과정에서 메서드와 this가 끊어지므로
    this.handleClick = this.handleClick.bind(this); // 메서드를 this에 바인딩
  }

  handleChange(e) {
    //임의메서드
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    //임의메서드
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
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
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
