import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import createStyles from './app-button-style';

const AppButton = props => {
  const { disabled, onClick } = props;
  const classes = createStyles();

  return (
    <Fab classes={classes} data-dss-inv disabled={disabled} onClick={onClick}>
      <MenuIcon />
    </Fab>
  );
};

AppButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

AppButton.defaultProps = {
  disabled: false,
  onClick: () => null,
};

AppButton.displayName = 'AppButton';

export { AppButton };
