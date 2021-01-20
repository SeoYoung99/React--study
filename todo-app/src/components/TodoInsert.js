import React from 'react';
import { MdAdd } from 'react-icons/md'; // {아이콘 이름}
import { useState } from '../../node_modules/react/cjs/react.development';
import { useCallback } from '../../node_modules/react/index';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState(''); //useState로 상태 정의

  //onChange함수를 콜백함수로 정의
  const onChange = useCallback((e) => {
    setValue(e.target.value); //상태를 인풋에 입력받은 값으로 업데이트 해준다.
  }, []);
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value} //초기값
        onChange={onChange} //onChange함수로 핸들링
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
