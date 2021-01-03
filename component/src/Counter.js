import React, { Component } from "react";

class Counter extends Component {
  /* constructor(props) {
    //state를 설정하는 constructor 메서드
    super(props); //반드시 호출해야함
    //현재 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자함수를 호출
    this.state = {
      number: 0, //state의 초기값 설정, state는 객체 형식!
      fixedNumber: 0,
    }; 
  }*/
  state = {
    number: 0,
    fixedNumber: 0,
  }; //state 초기화

  render() {
    const { number, fixedNumber } = this.state; //state를 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            //onClick 은 버튼의props
            //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
            this.setState({ number: number + 1 });
            //setState를 사용해서 state에 새로운 값을 넣음
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
