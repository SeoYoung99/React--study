import React from 'react';
//import Todos from './components/Todos';
import TodosContainer from './containters/TodosContainer';
import CounterContainer from './containters/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};
export default App;
