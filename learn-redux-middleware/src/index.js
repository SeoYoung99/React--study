//리덕스 적용하기
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
//import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";

const logger = createLogger(); //리덕스 logger 사용하기
//리덕스 미들웨어를 스토어를 생성하는 과정에서 적용
const store = createStore(rootReducer, applyMiddleware(logger)); //루트 리듀서를 이용하여 스토어 생성

ReactDOM.render(
  //Provider 컴포넌트로 App컴포넌트를 감싸서 리덕스 적용
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
