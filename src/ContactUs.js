import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



function ContactUs() {
  return (
    <div >
    <img
        width={350} height={250}
        src="http://www.seeds2leads.com.au/wp-content/uploads/2016/12/1476994814.jpg"
        alt="contactUs"
      />
      <br/>
      <h2>CONTACT LIST</h2>
      <hr
    style={{
      backgroundColor: 'blue',
      height: 3,
      width: 160
    }}
  />
   <section >
      <Container>
      
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <div >
            <h4>General Enquires</h4>
              <h4>+91 80 23571220</h4>
              <h4><a href="info@npsypr.com">NPS INFO</a> </h4>
            </div>
          </Grid>
          </Grid>
      </Container>
    </section>
     
    </div>
  );
}

export default ContactUs;