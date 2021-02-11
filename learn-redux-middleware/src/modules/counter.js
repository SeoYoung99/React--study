// counter 리덕스 모듈
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE"; //액션 타입 정의
const DECREASE = "counter/DECREASE";
const CLICK = "counter/CLICK";

export const increase = createAction(INCREASE); //액션 생성 함수
export const decrease = createAction(DECREASE);
export const click = createAction(CLICK);

//redux-thunk는 액션 생성 함수에서 일반 액션 객체를 반환하는 대신에 함수를 반환한다.
export const increaseAsync = () => (dispatch) => {
  //1초 뒤에 increase 함수를 디스패치
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  //1초 뒤에 decrease 함수를 디스패치
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
export const clickAsync = () => (dispatch) => {
  //3초 뒤에 click 함수를 디스패치
  setTimeout(() => {
    dispatch(click());
  }, 3000);
};

const initialState = 0; //초기상태 (꼭 객체일 필요는 없다)

const counter = handleActions(
  //리듀서 함수 생성
  {
    [INCREASE]: (state) => state + 1, //증가 액션 타입인 경우
    [DECREASE]: (state) => state - 1, //감소 액션 타입인 경우
  },
  initialState
);
export default counter;
