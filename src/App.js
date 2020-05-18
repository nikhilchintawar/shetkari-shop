import React from 'react';
import './App.css';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';


function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
