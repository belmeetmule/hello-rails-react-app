import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting } from './components/greeting/Greeting';

function App() {
  return (
    <div>
      <header>
        <h1>
          Welcome to the Greeting App
        </h1>
        <p> You can see random greeting message by clicking the greeting button</p>
        <Greeting />
      </header>
    </div>
  //   <Routes>
  //   <Route path="/" element={<Greeting />} />
  // </Routes>
  );
}

export default App;
