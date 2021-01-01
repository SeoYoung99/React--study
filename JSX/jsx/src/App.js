import React from 'react'; 
import './App.css'

function App() {
  const name = undefined; 
   // return name; 함수에서 undefined만 반환하는 상황은 X
   // return name || '값이 undefined입니다.'; undefined 일때 사용할 값을 지정
   return <div>{name || 'name값이 undefined입니다.'}</div>
}                       
export default App;
