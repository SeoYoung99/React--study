import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  //기본값에 파라미터로 함수 형태를 넣어주면 컴포넌트가 처음 렌더링될 때만 createBulkTodos함수 실행된다.

  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      //???
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo)); //todos배열에 위에서 만들어준 todo객체를 추가해준다
      nextId.current += 1; //id+1
    },
    [], //todos가 바뀔때만 렌더링
  );

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((
        todo, //특정 id를 가지고 있는 객체의 checked값을 반전시켜줌
      ) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />{' '}
      {/* props 넣어주기 */}
    </TodoTemplate>
  );
};
export default App;
