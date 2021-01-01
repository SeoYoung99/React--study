import React from 'react';

function App() {
  const name = '리액트'; // && 사용해서 조건부 랜더링
  return <div> {name === '리액트' && <h1>리액트입니다.</h1>} </div>;
}                       //  참  && 참 -> 참
                        // 거짓 && 참 -> 거짓, false를 랜더링 할때는 null처럼 아무것도 나타나지 않음
export default App;
