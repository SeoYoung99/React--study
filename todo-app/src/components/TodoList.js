import React from 'react';
import TodoListItem from './TodoListItem'; //블러오기
import './TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};
export default TodoList;
