import React from 'react';
import {
  Grid, Typography, Button, Hidden, useMediaQuery,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import useStyles from '../css/HomeStyles';
import coverModel from '../images/coverModel.png';

const Home = ({ loggedIn, setFromBookPage }) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const handleBook = () => {
    if (loggedIn) {
      history.push('/book');
    } else {
      setFromBookPage(true);
      history.push('/login');
    }
  };

  const renderComputer = () => (
    <>
      <Grid item xs={12} sm={6} className={classes.leftContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.welcomeText} variant="h4">
              Welcome to Attractions Salon!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.welcomeText} variant="body2">
              Dedicated to helping you be your most beautiful self
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" className={classes.bookBtn}>
            <Button variant="contained" color="primary" onClick={() => handleBook()}>
              Request Booking
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid item xs={12} sm={6} align="center" className={classes.rightContainer}>
          <img src={coverModel} alt="" className={classes.modelImg} />
        </Grid>
      </Hidden>
    </>
  );

  const renderMobile = () => (
    <>
      <Grid item xs={12} sm={6} align="center" className={classes.rightContainer}>
        <img src={coverModel} alt="" className={classes.modelImgMobile} />
        <div className={classes.mobileText}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.welcomeText} variant="h4">
                Welcome to Attractions Salon!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.welcomeText} variant="body2">
                Dedicated to helping you be your most beautiful self
              </Typography>
            </Grid>
            <Grid item xs={12} align="center" className={classes.bookBtn}>
              <Button variant="contained" color="primary" onClick={() => handleBook()}>
                Request Booking
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );

  return (
    <Page maxWidth={false}>
      <Grid container className={classes.page}>
        {matches
          ? renderComputer()
          : renderMobile()}
      </Grid>
    </Page>
  );
};

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setFromBookPage: PropTypes.func.isRequired,
};


export default Home;
