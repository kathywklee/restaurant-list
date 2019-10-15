import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import { Input } from 'components/atoms/input';

const useStyles = makeStyles({
  root: {
    margin: '20px 0 ',
  },
  button: {
    marginTop: '20px',
  },
});

export const SignInComponent = props => {
  const { translate } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} container justify="center">
        <Grid item xs={8}>
          <Input placeholder={translate('email')} />
        </Grid>
        <Grid item xs={8}>
          <Input type="password" placeholder={translate('password')} />
        </Grid>
        <Grid className={classes.button} item xs={8}>
          <Button>{'sign in'}</Button>
        </Grid>
      </Grid>
    </div>
  );
};
