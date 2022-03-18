import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import MainScreen from './modules/views/MainScreen';
import FooterForFirstPage from './modules/views/FooterForFirstPage';

function FirstScreen() {
  return (
    <React.Fragment>
      
      
      <MainScreen />
      <br/>
      <br/>
      <br/>
      
      <FooterForFirstPage />
      
      
      
      
      
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default FirstScreen;