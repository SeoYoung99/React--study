import React from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem'; //블러오기
import './TodoList.scss';
import { useCallback } from '../../node_modules/react/cjs/react.development';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List //react-virtualized의 list컴포넌트 사용
      className="TodoList"
      width={512} //전체크기
      height={513} //전체 높이
      rowCount={todos.length} //항목 개수
      rowHeight={57} //항목 높이
      rowRenderer={rowRender} //항목을 렌더링할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본 적용되는 outline스타일 제거
    />
  );
};
export default React.memo(TodoList);
