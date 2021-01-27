import React, { useReducer, useRef, useCallback } from "react";
import CommentInsert from "./components/CommentInsert";
import CommentList from "./components/CommentList";

function createBulkTodos() {
  // 기본값들 생성
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  //useReducer에서 쓰는 reducer함수
  switch (action.type) {
    case "INSERT": //새로추가
      return todos.concat(action.todo);
    case "REMOVE": //제거
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE": //토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //  state  상태감지!                                      초기값으로 만들어 놓은 array = todos
  //기본값에 파라미터로 함수 형태를 넣어주면 컴포넌트가 처음 렌더링될 때만 createBulkTodos함수 실행된다.

  //ref를 사용하여 변수 담기
  const nextId = useRef(6);

  const onInsert = useCallback(
    (text) => {
      //???
      const todo = {
        //새 항목 ( 객체 )
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: "INSERT", todo });
      nextId.current += 1; //id+1
    },
    [] //todos가 바뀔때만 렌더링
  );

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <div className="App">
      <div>게시글</div>
      <div>
        <button>좋아요</button>
        <CommentInsert onInsert={onInsert} />
        <CommentList todos={todos}></CommentList>
      </div>
    </div>
  );
}

export default App;
