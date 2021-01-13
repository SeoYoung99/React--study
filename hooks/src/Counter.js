import React, { useReducer } from "react";

function reducer(state, action) {
  //1. 리듀서 함수 만들기
  switch (action.type) {
    case "INCREMENT": //action.type == 'INCREMENT'일때
      return { value: state.value + 1 }; //state의 value에 +1
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //   현재상태                                     기본값
  //  dispatch: 함수안에 액션값을 파라미터로 넣어주면 리듀서 함수 호출
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      {/* dispatch에 파라미터로 액션값을 넣어줌 -> reducer함수에서 action type에 맞게 실행 */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
export default Counter;
