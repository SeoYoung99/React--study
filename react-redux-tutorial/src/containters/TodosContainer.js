import React from 'react';
import { connect } from 'react-redux';
//리덕스 스토어에서 불러옴
import { changeInput, insert, toggle, remove } from '../modules/todos';
//프레젠테이셔널 컴포넌트에서 불러옴
import Todos from '../components/Todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};
export default connect(
  //비구조화 할당을 통해 todos를 분리하여
  //state.todos.input 대신 todos.input을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
