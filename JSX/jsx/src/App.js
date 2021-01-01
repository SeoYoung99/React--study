import React from 'react';

//JSX 밖에서 if문 사용해서 사전에 값을 설정
function App() {
  const name = '뤼액트'; // { } 안에 조건부 연산자(= 삼항 연산자) 사용 (if는 사용불가)
  return (
    <div>
      {name === '리액트' ? ( // { 조건? (참일때) : (거짓일때) }
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
