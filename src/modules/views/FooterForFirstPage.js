import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function FooterForFirstPage(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <div className={classes.item}>
           
              <Typography variant="h6" className={classes.title}>
                OUR SCHOOL
              </Typography>
              <Typography variant="h5">
              <h4><Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/overView"
            >
              {'Overview'}
            </Link></h4>
               <h4>Our Mission and Vision</h4>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} md={3}>
            <div className={classes.item}>
           
              <Typography variant="h6" className={classes.title}>
                ENROLMENT
              </Typography>
              <Typography variant="h5">
               <h4>Enrolment</h4>
               <h4>Enterance Test Details</h4>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} md={3}>
            <div className={classes.item}>
           
              <Typography variant="h6" className={classes.title}>
                CURRICULUM
              </Typography>
              <Typography variant="h5">
               <h4>Academics</h4>
               <h4>Sports</h4>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} md={3}>
            <div className={classes.item}>
           
              <Typography variant="h6" className={classes.title}>
                WELL Being
              </Typography>
              <Typography variant="h5">
               <h4>Student Counselling</h4>
              </Typography>
            </div>
          </Grid>
          <hr
    style={{
      backgroundColor: 'black',
      height: 3,
      width: 1200
    }}
  />
   <Grid item xs={2} md={4}>
            <div className={classes.item}>
            <img
                width={200} height={200}
                src="https://i2.wp.com/mmceshop.com/wp-content/uploads/2020/05/NPS-YPR.png?resize=324%2C324"
                alt="java"
              />
             
            </div>
          </Grid>

          <Grid item xs={4} md={2}>
            <div className={classes.item}>
            <img
                className={classes.image}
                src="https://cdn.pixabay.com/photo/2021/09/27/22/30/phone-6662438__340.png"
                alt="java"
              />
              <Typography variant="h6" className={classes.title}>
                Contacts
              </Typography>
             
            </div>
          </Grid>
          <Grid item xs={4} md={2}>
            <div className={classes.item}>
            <img
                className={classes.image}
                src="data:image/jpeg;base64,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"
                alt="java"
              />
              <Typography variant="h6" className={classes.title}>
                Address
              </Typography>
             
            </div>
          </Grid>
          <Grid item xs={4} md={2}>
            <div className={classes.item}>
            <img
                className={classes.image}
                src="data:image/jpeg;base64,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"
                alt="java"
              />
              <Typography variant="h6" className={classes.title}>
                Whatsapp
              </Typography>
             
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

FooterForFirstPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterForFirstPage);
