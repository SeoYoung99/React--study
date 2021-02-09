import { combineReducers } from "redux";
import counter from "./counter"; // counter모듈 불러오기

const rootReducer = combineReducers({ counter }); // 루트 리듀서 생성

export default rootReducer;
