import React from 'react';
import TodoListItem from './TodoListItem'; //블러오기
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  //받아온 props
  return (
    //map함수로 TodoListItem으로 이루어진 배열로 변환
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} /> //todo데이터는 통째로 props에 전달, key는 id
        //onRemove props는 받아서 그대로 TodoListItem으로 전달
      ))}
    </div>
  );
};
export default TodoList;
