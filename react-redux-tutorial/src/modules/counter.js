import { createAction, handleActions } from 'redux-actions';
//액션 타입 정의 (대문자)
//문자열: 모듈 이름/ 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수 만들기 (리덕스 액션 라이브러리 함수 사용)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//counter모듈의 초기 상태
const initialState = {
  number: 0,
};

/*리듀서 함수 만들기
function counter(state = initialState, action) {
  //현재 상태를 참조
  switch (action.type) {
    case INCREASE:
      return {
        //새로운 객체를 생성해서 반환
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}*/

//리듀서 함수 간단하게 만들기
const counter = handleActions(
  {
    //첫번째 파라미터에 각 액션에 대한 업데이트 함수
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState, //두번째 파라미터는 초기상태
);
export default counter; //함수 내보내기 (default는 한개만 내보낼 수 있다.)
