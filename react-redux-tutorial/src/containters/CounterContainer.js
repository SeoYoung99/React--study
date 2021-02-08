import React from 'react';
// connect함수 사용
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨줌
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

//store의 내장함수인 dispatch를 컴포넌트의 props로 넘겨줌
const mapDispatchToProps = (dispatch) => ({
  //임시함수
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

//connect함수의 타깃 컴포넌트 = CounterContainer를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트 생성
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
