import React from 'react';
import { MdAdd } from 'react-icons/md'; // {아이콘 이름}
import { useState } from '../../node_modules/react/cjs/react.development';
import { useCallback } from '../../node_modules/react/index';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  //App.js 에서 <TodoInsert onInsert={onInsert}라고 작성되어 있음>, props로 함수를 받아옴
  const [value, setValue] = useState(''); //useState로 상태 정의

  //콜백함수로 정의
  const onChange = useCallback((e) => {
    setValue(e.target.value); //상태를 인풋에 입력받은 값으로 업데이트 해준다.
  }, []);

  const onSubmit = useCallback(
    //onSubmit이벤트를 핸들링할 때 넣어줄 함수
    (e) => {
      onInsert(value); //업데이트된value값을 onInsert함수에 넣어서 호출해준다. ( value == text )
      setValue(''); //value값 초기화
      //submit 이벤트는 새로고침을 발생시킨다. 이를 방지하기 위해 아래 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value} //초기값
        onChange={onChange} //onChange함수로 핸들링
      />
      <button
        type="submit" //submit타입
      >
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
