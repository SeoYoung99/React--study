//컨테이너 컴포넌트 ( 리덕스를 연동해서 props들을 Counter로 넘겨주기 )
import React from "react";
import { connect } from "react-redux"; //connect함수
import { increaseAsync, decreaseAsync, clickAsync } from "../modules/counter"; //counter모듈 불러오기
import Counter from "../components/Counter"; //Counter컴포넌트 불러오기

const CounterContainer = ({
  number,
  increaseAsync,
  decreaseAsync,
  clickAsync,
}) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
      click={clickAsync}
    />
  );
};
export default connect(
  
  (state) => ({
    // 리덕스 스토어안에 있는 상태
    number: state.counter,
  }),
  {
    increaseAsync, //액션을 디스패치하는 함수들
    decreaseAsync,
    clickAsync,
  }
)(CounterContainer);
