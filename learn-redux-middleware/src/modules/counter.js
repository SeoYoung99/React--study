// counter 리덕스 모듈
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE"; //액션 타입 정의
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE); //액션 생성 함수
export const decrease = createAction(DECREASE);

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
