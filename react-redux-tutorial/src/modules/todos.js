import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
//액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경함
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; //todo를 체크 /체크 해제함
const REMOVE = 'todos/REMOVE'; //todo를 제거함

//액션 생성 함수 만들기 (파라미터 필요) -> payload: 액션에 필요한 추가 데이터,
//createAction의 두번째 함수에 payload를 정의하는 함수를 따로 선언
export const changeInput = createAction(CHANGE_INPUT, (input) => input); //파라미터를 그대로 반환, 생략 가능

let id = 3;
//두번째 파라미터에 text를 넣어주면 todo객체가 반환
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

//초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    //파라미터로 받아온 값을 action.id등으로 넣는것이 아니라 action.payload라는 이름을 공통적으로 사용한다.
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);
/*
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
let id = 3; // insert가 호출될 때마다 1씩 더해짐

export const insert = (text) => ({
  type: INSERT,
  todo: {
    //todo객체
    id: id++, //파라미터 외에 사전에 이미 선언되어 있는 id라는 값에 의존
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

//초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};
// 리듀서 함수 만들기 (배열에 변화를 줄 때는 배열 내장 함수 사용)
function todos(state = initialState, action) {
  //state: { input: string; todos: { id: number; text: string; done: boolean; } [ ] ; }
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo), //todos 배열에 추가
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}*/
export default todos;
