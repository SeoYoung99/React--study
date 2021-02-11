import { combineReducers } from "redux";
import counter from "./counter"; // counter모듈 불러오기
import sample from "./sample";

const rootReducer = combineReducers({ counter, sample }); // 루트 리듀서 생성

export default rootReducer;
