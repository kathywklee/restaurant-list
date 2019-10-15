import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Courier',
  },
});

export const H1 = props => <Typography className={useStyles().root} variant="h1" {...props} />;

export const H2 = props => <Typography className={useStyles().root} variant="h2" {...props} />;

export const H3 = props => <Typography className={useStyles().root} variant="h3" {...props} />;
