import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddWebsite from './components/websites/AddWebsite';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add-website" component={AddWebsite} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
