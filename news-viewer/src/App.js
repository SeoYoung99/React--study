import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
  //category값이 선택적 즉, 있을 수도 있고 없을 수도 있다.
};

export default App;
