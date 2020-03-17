import {
  TextField, Card, CardMedia, Grid, CardActionArea, useTheme, FormControl,
  InputLabel, Select, MenuItem, Input, Chip,
} from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../css/DetailsStyles';
import hairIllustration from '../images/hairIllustration.png';
import eye from '../images/eye.png';
import hand from '../images/hand.png';
import loadServiceOptions from '../stores/DetailsStore';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Details = ({ booking, updateBooking }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [type, setType] = useState('');

  const [serviceOptions, setServiceOptions] = useState([]);
  const [addOnOptions, setAddOnOptions] = useState([]);

  const addOn = (value) => {
    updateBooking(['addons', value]);
  };

  const changeType = async (newType) => {
    setType(newType);
    updateBooking(['service', ''], ['addons', []], ['specialist', '']);
    setServiceOptions(await loadServiceOptions(newType));
    setAddOnOptions([]);
  };

  const changeService = (newService) => {
    updateBooking(['service', newService], ['addons', []], ['specialist', '']);
    setAddOnOptions(serviceOptions.find((s) => s._id === newService).addons);
  };

  return (
    <>
      <h2 className={classes.header}>How can we help you today?</h2>
      <form>
        <TextField
          required
          label="Name"
          className={classes.textfield}
          value={booking.name}
          onChange={(event) => updateBooking('name', event.target.value)}
        />
        <TextField
          required
          label="Email"
          className={classes.textfield}
          value={booking.email}
          onChange={(event) => updateBooking('email', event.target.value)}
        />
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={4}>
            <Card
              className={classes.card}
              style={{ borderColor: type === 'hair' ? theme.palette.primary.main : 'transparent' }}
            >
              <CardActionArea onClick={() => changeType('hair')}>
                <CardMedia component="image" image={hairIllustration} className={classes.media} />
                <h5 className={classes.cardContent}>Hair</h5>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.card}
              style={{ borderColor: type === 'wax' ? theme.palette.primary.main : 'transparent' }}
            >
              <CardActionArea onClick={() => changeType('wax')}>
                <CardMedia component="image" image={eye} className={classes.media} />
                <h5 className={classes.cardContent}>Wax</h5>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.card}
              style={{ borderColor: type === 'nails' ? theme.palette.primary.main : 'transparent' }}
            >
              <CardActionArea onClick={() => changeType('nails')}>
                <CardMedia component="image" image={hand} className={classes.media} />
                <h5 className={classes.cardContent}>Nails</h5>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <FormControl required className={classes.formControl}>
          <InputLabel>Service</InputLabel>
          <Select
            value={booking.service}
            onChange={(event) => changeService(event.target.value)}
            MenuProps={MenuProps}
          >
            {serviceOptions.map((serv) => (
              <MenuItem key={serv._id} value={serv._id}>
                {serv.name}
                {' '}
                ($
                {serv.price}
                )
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.textfield} style={{ marginTop: 10 }}>
          <InputLabel>Add-ons</InputLabel>
          <Select
            multiple
            value={booking.addons}
            onChange={(event) => addOn(event.target.value)}
            input={<Input />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value.name} label={value.name} className={classes.chip} color="secondary" />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {addOnOptions.map((add) => (
              <MenuItem key={add.name} value={add}>
                {add.name}
                {' '}
                ($
                {add.price}
                )
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.textfield}>
          <InputLabel>Preferred Specialist</InputLabel>
          <Select
            value={booking.specialist}
            onChange={(event) => updateBooking(['specialist', event.target.value])}
            MenuProps={MenuProps}
          >
            <MenuItem value="Test1">Specialist1</MenuItem>
            <MenuItem value="Test2">Specialist2</MenuItem>
            <MenuItem value="Test3">Specialist3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.textfield}
          label="Notes"
          multiline
          rowsMax="4"
          value={booking.notes}
          onChange={(event) => updateBooking(['notes', event.target.value])}
        />
      </form>
    </>
  );
};

Details.propTypes = {
  booking: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    confirmed: PropTypes.bool,
    time: PropTypes.string,
    service: PropTypes.string,
    addons: PropTypes.array,
    specialist: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
  updateBooking: PropTypes.func.isRequired,
};

export default Details;
