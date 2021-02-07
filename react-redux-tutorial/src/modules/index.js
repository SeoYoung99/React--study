//기존에 만들었던 리듀서를 하나로 합치기 위해 combineReducers라는 유틸함수 사용
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
}); //작성했던 리듀서 함수들을 합쳐줌

export default rootReducer;
