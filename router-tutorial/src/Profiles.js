import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
//import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact //exact = {true}와 같다.
        render={() => <div>사용자를 선택해 주세요.</div>}
        // component 대신 render를 넣어줌 -> 컴포넌트 자체를 전달하는 것이 아니라 보여주고 싶은 JSX를 넣어줌
        //따로 컴포넌트를 만들기 애매하거나 컴포넌트에 props를 별도로 넣어주고 싶을 떄 사용
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
export default Profiles;
