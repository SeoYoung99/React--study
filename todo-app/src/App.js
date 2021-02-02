import React, { useState, useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Image from './components/Images';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'; // {아이콘 이름}
import './App.css';

function createBulkTodos() {
  // 기본값들 생성
  const array = [];
  for (let i = 1; i <= 2; i++) {
    array.push({
      id: i,
      text: `댓글${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  //useReducer에서 쓰는 reducer함수
  switch (action.type) {
    case 'INSERT': //새로추가
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const [likes, setLikes] = useState(false);
  //  state  상태감지!                                      초기값으로 만들어 놓은 array = todos
  //기본값에 파라미터로 함수 형태를 넣어주면 컴포넌트가 처음 렌더링될 때만 createBulkTodos함수 실행된다.

  //ref를 사용하여 변수 담기
  const nextId = useRef(3);

  const onInsert = useCallback(
    (text) => {
      //???
      const todo = {
        //새 항목 ( 객체 )
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; //id+1
    },
    [], //todos가 바뀔때만 렌더링
  );

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const onlikes = () => {
    setLikes(!likes);
  };

  return (
    <TodoTemplate>
      <Image />
      <button
        class={likes ? 'yes' : 'no'}
        style={{ width: 100, height: 50 }}
        onClick={onlikes}
      >
        좋아요
        {likes ? (
          <MdFavorite size="20" color="navy" />
        ) : (
          <MdFavoriteBorder size="20" />
        )}
      </button>
      <div style={{ fontSize: 18 }}>댓글 {todos.length} </div>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        likes={likes}
        onRemove={onRemove}
        onToggle={onToggle}
      />{' '}
      {/* props 넣어주기 */}
    </TodoTemplate>
  );
};
export default App;
