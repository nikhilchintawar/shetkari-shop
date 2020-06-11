import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import SignIn from './user-authentication/signin/signin.component';
import SignUp from './user-authentication/signup/signup.component';
import HomePage from './pages/homepage/homepage.component';
import ContactForm from './components/contact-form/contact-form.component';
import Menu from "./core/menu/menu.component";
import Footer from "./core/footer/footer.component";
import AdminRoute from './auth/helper/admin-route';
import AdminDashBoard from "./user/admin-dashboard/AdminDashboard";
import NotFounnd from './pages/404-page/NotFound';
import AddProduct from "./admin/AddProduct";
function Routes() {
  return (
    <div>
    <Menu />
    <div className="App">
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/contact" component={ContactForm} />
    <AdminRoute exact path="/farmer/dashboard" component={AdminDashBoard} />
    <AdminRoute path="/farmer/create/product" component={AddProduct} />

    <Route path="" component={NotFounnd} />    
    </Switch>
    </div>
    <Footer />
    </div>
  );
}

export default Routes;
