import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";

const SplitMe = React.lazy(() => import("./SplitMe"));
// 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense
          fallback={<div>loading...</div>}
          //코드 스플리팅된 컴포넌트를 로딩, fallback을 통해 로딩이 끝나지 않았을 때 보여줄 UI설정
        >
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
