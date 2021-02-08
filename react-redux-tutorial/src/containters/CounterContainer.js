import React from 'react';
// connect함수 사용
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/* 아래처럼 mapStateToProps와 mapDispatchToProps를 미리 선언해서 사용할 수도 있고

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨줌
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

//store의 내장함수인 dispatch를 컴포넌트의 props로 넘겨줌
const mapDispatchToProps = (dispatch) => ({
  //임시함수
  increase: () => {
    //액션 생성함수를 불러와 액션 개체를 만들어 디스패치
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

//connect함수의 타깃 컴포넌트 = CounterContainer를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트 생성
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

*/

//connect함수 내부에 익명 함수 형태로 선언할 수도 있다.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  //mapDispatchToProps에 해당하는 파라미터를 액션생성함수로 이루어진 객체 형태로 넣어주면
  //connect함수가 내부적으로 bindActionCreators작업을 대신해줌
  { increase, decrease },
)(CounterContainer);
