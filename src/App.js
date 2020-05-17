import React from 'react';
import './App.css';
import SignUp from './components/signup/signup.component';
import SignIn from './components/signin/signin.component';


function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
