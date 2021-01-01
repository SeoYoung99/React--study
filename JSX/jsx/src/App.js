import React from 'react'; 
import './App.css'

function App() {
  const name = '리액트';
  const style = { 
    //background-color는 backgroundColor와 같이 카멜 표기법으로 작성
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    paddig: 16
  }; //DOM요소에 스타일링을 적용할때는 '객체형태'로!!
  return <div style = {style}>{name}</div>;
}                       
export default App;
