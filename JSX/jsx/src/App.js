import React from 'react'; 
import './App.css'
//HTML에서는 css클래스를 사용할 때 class 속성 사용
//JSX에서는 className으로 설정해야함.
function App() {
  const name = '리액트';
  
  return <div className= "react">{name}</div>;
}                       
export default App;
