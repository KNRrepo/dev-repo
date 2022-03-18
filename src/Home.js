import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import UserSignIn from './UserSignIn.js';
import Dashb from './Dashb';
import { Contacts, Dashboard, FirstPage } from '@material-ui/icons';
import history from './history';
import Admin from './Admin';
import User from './User';
import FirstScreen from './FirstScreen';
import ContactUs from './ContactUs';

function Index() {
  return (
    <React.Fragment>
      
      <Router history={history}>
      <AppAppBar exact path="" />
      <Route exact path="/" component={FirstScreen} />
      <Route exact path="/home" component={Dashb} />
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/userSignin" component={UserSignIn} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/user" component={User} />
      <Route exact path="/contacts" component={ContactUs} />
      </Router>
      
      
      
      
      
      
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default withRoot(Index);