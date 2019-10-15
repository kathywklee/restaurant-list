import PropTypes from 'prop-types';

import styles from './button-style.scss';

const Button = props => {
  const { children, disabled, onClick } = props;

  return (
    <button data-dss-inv className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => null,
};

Button.displayName = 'Button';

export { Button };
