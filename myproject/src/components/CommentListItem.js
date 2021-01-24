import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md"; //아이콘 여러개 사용
import cn from "classnames"; //조건부 스타일링을 위해 classnames사용
//import './TodoListItem.scss'; //스타일 받아오기

const CommentListItem = ({ todo, onRemove, onToggle, style }) => {
  //받아온 props
  const { id, text, checked } = todo; //객체
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className="text">{text}</div>
        <button>좋아요</button>
      </div>
    </div>
  );
};
export default React.memo(CommentListItem);
