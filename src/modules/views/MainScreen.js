import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserSignUp from '../../UserSignUp';
import AdminSignUp from '../../AdminSignUp';
import User from '../../User';
import { Home } from '@material-ui/icons';
import MainScreenLayout from './MainScreenLayout';

const backgroundImage =
  'https://npspuc.com/images/gallery/gallery1.jpg';
const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <MainScreenLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
     
      <Typography color="inherit" align="center" variant="h2" marked="center">
        CAMPUS
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      “A university is just a group of buildings gathered around a library.”
      ― Shelby Foote
      </Typography>
  <div class="row">
    <div class="col-xs-6">
      <Router>
      <Link to="/">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        CLASSROOMS
      </Button>
      </Link>
      <Switch>
          <Route exact path="/signup">
            <UserSignUp />
          </Route>
          </Switch>
          </Router>
          </div>
          
          &nbsp;
          <div class="col-xs-12">
          <Router>
      <Link to="/">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        PLAYGROUND
      </Button>
      </Link>
      <Switch>
          <Route exact path="/asignup">
            <AdminSignUp />
          </Route>
          </Switch>
          </Router>
          </div>
          </div>
<br/>
          <div class="row">
    <div class="col-xs-2">
      <Router>
      <Link to="/">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        DIGITAL CLASS
      </Button>
      </Link>
      <Switch>
          <Route exact path="/signup">
            <UserSignUp />
          </Route>
          </Switch>
          </Router>
          </div>
          &nbsp;
          <div class="col-xs-12">
          <Router>
      <Link to="/">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        LIBRARY
      </Button>
      </Link>
      <Switch>
          <Route exact path="/asignup">
            <AdminSignUp />
          </Route>
          </Switch>
          </Router>
          </div>
          </div>
          
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Be Digital
      </Typography> */}
    </MainScreenLayout>
  );
}



ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
