//Route라는 컴포넌트를 사용해서 사용자의 현재 경로에 따라 다른 컴포넌트를 보여준다.
// <Route path="주소규칙" component={보여 줄 컴포넌트} />
// <Link to='주소'>내용</Link>

import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <u1>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </u1>
      <hr />
      <Route
        path="/"
        component={Home}
        exact={true} //exact라는 props를 true로 설정
      />
      <Route path="/about" component={About} />
    </div>
  );
};
export default App;
