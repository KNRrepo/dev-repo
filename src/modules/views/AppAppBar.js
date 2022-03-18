import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          
        <img
          src="https://www.npsypr.com/images/logo.jpg"
          width={300} height={60}
          alt="curvy lines"
        />
          <div className={classes.left} />
          <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/home"
            >
              {'Home'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/aboutUs"
            >
              {'About Us'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/admissions"
            >
              {'Admissions'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/learning"
            >
              {'Learning'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/ourSchool"
            >
              {'Our School'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/circular"
            >
              {'Circular'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/careers"
            >
              {'Careers'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/contacts"
            >
              {'Contacts'}
            </Link>
         
           {/* <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {'User Sign In'}
            </Link>
           */}
            
            
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
