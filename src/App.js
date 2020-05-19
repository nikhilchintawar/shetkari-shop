import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/signup">
         <SignUp />
    </Route>
    <Route exact path="/signin">
         <SignIn />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
