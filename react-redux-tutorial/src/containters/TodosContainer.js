/* 
import React from 'react';
import { connect } from 'react-redux';
//리덕스 스토어에서 불러옴 (todos 상태안에 있는 값들과 액션 생성 함수)
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
    <Todos //Todos 컴포넌트에 props로 전달
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
    //받아온 todos( todos.js )를 분리해서 각각 input과 todos로 만들어서 파라미터로 받을 수 있게 해줌
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
*/

import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
