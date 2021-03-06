import React, { useCallback } from 'react';
// connect함수 사용
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
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
export default CounterContainer;
