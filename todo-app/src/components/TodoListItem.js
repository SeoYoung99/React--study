import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'; //아이콘 여러개 사용
import cn from 'classnames'; //조건부 스타일링을 위해 classnames사용
import './TodoListItem.scss'; //스타일 받아오기

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  //받아온 props
  const { id, text, checked } = todo; //객체
  return (
    <div
      className="TodoListItem-virtualized"
      style={style} //전체를 감싸서 props로 받아온 style을 적용
    >
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)} //클릭되면 onToggle함수 실행 -> checked상태가 반전됨
        >
          {' '}
          {/* checked가 참이어야 checked클래스가 적용된다. */}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div
          className="remove"
          onClick={() => onRemove(id)} //아이콘을 누르면 onRemove함수 호출
        >
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};
export default React.memo(TodoListItem);
