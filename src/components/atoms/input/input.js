import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputMaterial from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

export const Input = props => {
  const classes = useStyles();

  return (
    <InputMaterial
      className={classes.input}
      inputProps={{
        'aria-label': 'Description',
      }}
      {...props}
    />
  );
};
