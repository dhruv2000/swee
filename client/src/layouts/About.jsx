import React from 'react';
import {
  Grid, List, ListItem, ListItemText, Link, ListItemIcon,
  Typography,
} from '@material-ui/core';
import {
  Place, Email, Call, Facebook, AccessTime,
} from '@material-ui/icons';
import Page from '../components/Page';
import useStyles from '../css/AboutStyles';
import PhotoCarousel from '../components/PhotoCarousel';

const About = () => {
  const classes = useStyles();
  const addressLink = 'https://www.google.com/search?hl=en&sxsrf=ALeKk00YyPQXV5fYZc-YmnA1LxwoYCfeNg:1583648417111&source=hp&ei=nY5kXrS-EKLM1QGnr5kI&q=attractions%20salon&oq=attractions+salon&gs_l=psy-ab.3..35i39l2j0l8.1510.3107..3214...1.0..0.137.1766.2j14......0....1..gws-wiz.......0i131j0i67j0i20i263j0i131i20i263.LCrgGsRGmXM&ved=2ahUKEwjGkeeKnoroAhW7kHIEHeCdDawQvS4wAnoECAsQOg&uact=5&npsic=0&rflfq=1&rlha=0&rllag=29073323,-81928629,80437&tbm=lcl&rldimm=1918519656102451080&lqi=ChFhdHRyYWN0aW9ucyBzYWxvblomChFhdHRyYWN0aW9ucyBzYWxvbiIRYXR0cmFjdGlvbnMgc2Fsb24&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:1918519656102451080,l,ChFhdHRyYWN0aW9ucyBzYWxvblomChFhdHRyYWN0aW9ucyBzYWxvbiIRYXR0cmFjdGlvbnMgc2Fsb24;mv:[[30.457076299999997,-79.8708192],[27.441068599999998,-90.3248397]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2';
  const fbLink = 'https://www.facebook.com/pages/Attractions-Salon/746300208837896';

  return (
    <Page maxWidth={false}>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={12} sm={4} md={3} className={classes.leftContainer}>
          <List>
            <ListItem>
              <ListItemIcon><Place color="primary" /></ListItemIcon>
              <ListItemText
                primary="Address"
                secondary={(
                  <Link href={addressLink} color="inherit">
                    4509 NW 23 Ave, Gainesville, FL 32606
                  </Link>
                  )}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Call color="primary" /></ListItemIcon>
              <ListItemText
                primary="Phone"
                secondary="(352) 376-6008"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Email color="primary" /></ListItemIcon>
              <ListItemText
                primary="Email"
                secondary="attractions.salon@gmail.com"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Facebook color="primary" /></ListItemIcon>
              <ListItemText
                primary="Social"
                secondary={(
                  <Link href={fbLink} color="inherit">
                    Facebook
                  </Link>
                )}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><AccessTime color="primary" /></ListItemIcon>
              <ListItemText
                primary="Hours"
                secondary="Tuesday - Friday 10 AM - 7 PM"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={8} md={9} className={classes.rightContainer}>
          <h1 align="center" display="block" gutterbottom>About Us</h1>
          <Typography variant="body2" className={classes.mission}>
            Attractions Salon is a local beauty boutique founded in Gainesville, Florida. We
            specialize in hair, nail, and wax treatments. With both affordable prices and the
            finest products, our team is dedicated to providing quality service and a
            pleasant experience to each and every one of our clients. Keep reading to learn more.
          </Typography>
          <PhotoCarousel />
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
