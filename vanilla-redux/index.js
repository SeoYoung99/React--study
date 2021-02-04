import { createStore } from "redux";

//수정할 DOM노드를 가리키는 값을 선언
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//액션 이름 정의 (문자열, 대문자, 고유한 이름)
const TOGGLE_SWITCH = "TOCCLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성
//액션 객체는 반드시 type값을 갖고 잇어야 하고 그 외에 상태를 업데이트할 때 참고하고 싶은 값은 마음대로 넣을 수 있다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

//리듀서 함수 정의 (함수의 파라미터로 action과 state값을 받아온다)
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리한다.
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//스토어 만들기 (위에서 import해야함)
const store = createStore(reducer);

//render함수 만들기
//상태가 업데이트될 때마다 호출되며 이미html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState(); //현재 상태를 불러옴
  //토글처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //카운터 처리
  counter.innerText = state.counter;
};
render();

//스토어의 상태가 바뀔때마다 render함수가 호출되도록 해주는 구독함수
store.subscribe(render);

//액션 발생시키기 (dispatch)
//각 DOM요소에 클릭이벤트 설정, 이벤트 함수 내부에서 dispatch함수를 사용하여 액션을 스토어에 전달
divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
