import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성!

ReactDOM.render(
  <Provider
    store={store} //react-redux에서 제공하는 Provider 컴포넌트로 App 컴포넌트를 감싸준다, store을 props로 전달
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);

//ServiceWorker.unregister();
