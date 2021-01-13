import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  //초기값을 파라미터로 받는다.
  const [state, dispatch] = useReducer(reducer, initialForm);
  //dispatch -> reducer함수 호출
  const onChange = (e) => {
    dispatch(e.target); //이벤트 객체가 지니고있는 e.target 값 자체를 액션 값으로 사용
  };
  return [state, onChange];
}
