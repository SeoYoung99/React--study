import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import notify from "./notify";

function App() {
  const onClick = () => {
    //notify(); 이건 notify 코드가 main 파일 안에 들어감.
    import("./notify").then((result) => result.default());
    //import를 함수로 사용하면 Promise를 반환한다.

    //따로 import함수를 사용하면 파일을 따로 분리시켜서 저장.
    //실제 함수가 필요한 지점에서 파일을 불러와 사용할 수 있다.
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!!</p>
      </header>
    </div>
  );
}

export default App;
