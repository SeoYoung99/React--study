import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './containters/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};
export default App;
