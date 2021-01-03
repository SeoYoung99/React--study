import React, { Component } from "react";

class Counter extends Component {
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

            this.setState((prevState) => {
              //동기적으로 업데이트를 하고 싶으면 객체 대신 함수 인자를 전달!!
              //setState를 사용해서 state에 새로운 값을 넣음
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            })); //함수에서 바로 객체를 반환
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
