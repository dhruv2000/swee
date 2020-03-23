import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%',
    marginBottom: 5,
  },
  formControl: {
    width: '100%',
  },
  media: {
    height: 90,
  },
  cardContent: {
    margin: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    marginTop: 0,
    paddingTop: 30,
  },
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));


export default useStyles;