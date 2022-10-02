import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserAuthProvider from './contexts/UserAuthContext';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <UserAuthProvider>
        <h1>App page</h1>
        <Login/>
      </UserAuthProvider>
    </>
  );
}

export default App;
