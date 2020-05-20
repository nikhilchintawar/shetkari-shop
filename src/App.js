import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
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
