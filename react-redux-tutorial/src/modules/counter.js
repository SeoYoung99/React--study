//액션 타입 정의 (대문자)
//문자열: 모듈 이름/ 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//counter모듈의 초기 상태
const initialState = {
  number: 0,
};

//리듀서 함수 만들기
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
}
export default counter; //함수 내보내기 (default는 한개만 내보낼 수 있다.)
