import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    //초기값으로 객체 배열이 들어감, todos는 객체 배열!!
    {
      id: 1,
      text: '리액트의 기초 알아보기', //내용
      checked: true, //완료여부
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      //???
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); //todos배열에 위에서 만들어준 todo객체를 추가해준다
      nextId.current += 1; //id+1
    },
    [todos], //todos가 바뀔때만 렌더링
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} /> {/* props 넣어주기 */}
    </TodoTemplate>
  );
};
export default App;
