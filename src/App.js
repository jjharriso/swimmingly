import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Import internal dependencies here
import {styleSheet} from './App.styles';
import Header from './components/header';
import Main from './containers/main';
import Footer from './components/footer';

function App(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default withStyles(styleSheet)(App);
