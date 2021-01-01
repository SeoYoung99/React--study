import React from 'react'; 
import './App.css'

function App() {
  const name = '리액트';
  
  return (<div style = {{ 
    backgroundColor: 'black',
    color: 'violet',
    fontSize: '48px',
    fontWeight: 'bold',
    paddig: 16
  }}>{name}</div>);
}                       
export default App;
