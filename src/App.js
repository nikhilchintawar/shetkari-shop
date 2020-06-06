import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import SignIn from './user/signin/signin.component';
import SignUp from './user/signup/signup.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ContactForm from './components/contact-form/contact-form.component';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path='/contact' component={ContactForm} />
         
    </Switch>
    </div>
  );
}

export default App;
