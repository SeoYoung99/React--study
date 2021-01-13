import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  //평균을 계산하는 함수
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  //list, number (state 2개)
  const inputEl = useRef(null); //useRef를 사용해서 ref객체 inputEl 설정

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    //버튼 핸들링 메서드
    const nextList = list.concat(parseInt(number)); //number를 추가한 새 배열 만들어서 list 업데이트
    setList(nextList);
    setNumber(""); //number는 초기화
    inputEl.current.focus(); //포커스 넘겨주기
  }, [number, list]); //number 또는 list가 바뀌었을 때만 함수생성

  const avg = useMemo(() => getAverage(list), [list]);
  // list 값이 바뀌었을 때만 getAverage함수를 호출, 바뀌지 않으면 이전에 연산했던 결과( [list] )를 다시 사용
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      {/* inputEl는 input요소를 카리킨다 */}
      <button onClick={onInsert}>등록</button>
      <u1>
        {list.map((val, index) => (
          <li key={index}>{val}</li> //list의 원소들을 <li>{원소}<li> 형식으로 만들어줌
        ))}
      </u1>
      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
