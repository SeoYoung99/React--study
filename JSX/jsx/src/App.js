import React from 'react'; 
import './App.css'

function App() {
  const name = '리액트';
  return(
    <>
      <div className="react" //시작태그에는 주석 가능
      >{name}</div>
      <input></input>
      <input /> {/* <- self-closing 태그 */}
    </>
  );
}                       
export default App;
