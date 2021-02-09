//리덕스 적용하기
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";

const store = createStore(rootReducer); //루트 리듀서를 이용하여 스토어 생성

ReactDOM.render(
  //Provider 컴포넌트로 App컴포넌트를 감싸서 리덕스 적용
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
