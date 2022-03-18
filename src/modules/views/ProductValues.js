import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

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

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://cdn-res.keymedia.com/cms/images/au/130/0314_637269086154300500.jpg"
                alt="java"
              />
              <Typography variant="h6" className={classes.title}>
                JAVA
              </Typography>
              <Typography variant="h5">
                {'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'},
                {'It is a general-purpose programming language intended to let application developers write once, run anywhere.'},
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="data:image/png;base64,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"
                alt="c++"
              />
              <Typography variant="h6" className={classes.title}>
                C++
              </Typography>
              <Typography variant="h5">
                {'C++ is a cross-platform language that can be used to create high-performance applications.'}

{'C++ was developed by Bjarne Stroustrup, as an extension to the C language.'}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="data:image/png;base64,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"
                alt="react"
              />
              <Typography variant="h6" className={classes.title}>
                React
              </Typography>
              <Typography variant="h5">
                {'React is an open-source JavaScript library for building user interfaces or UI components.'}
                {'It is maintained by Facebook and a community of individual developers and companies.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
