import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoProvider from './contexts/todoContext';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <>
      <TodoProvider>
        <h1>Todo lists</h1>
        <AddTodo/>
      </TodoProvider>
    </>
  );
}

export default App;
