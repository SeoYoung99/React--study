import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>, //로딩 중에 보여줄 UI는 loadable함수에서 선언
});
//React.lazy 대신 loadable

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload(); //컴포넌트 미리 불러오기
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={onClick}
          onMouseOver={onMouseOver}
          //마우스를 올리기만 해도 로딩이 시작
        >
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
