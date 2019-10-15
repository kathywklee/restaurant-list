import { makeStyles } from '@material-ui/styles';

const createStyles = makeStyles({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    right: 0,

    borderWidth: '1px',
    borderColor: 'transparent',
    borderStyle: 'solid',

    '&:active': {
      boxShadow: 'none',
      background: 'transparent',
    },

    '&:focus': {
      boxShadow: 'none',
      background: 'transparent',
    },
  },
});

export default createStyles;
