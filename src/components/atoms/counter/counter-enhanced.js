import { connect } from 'react-redux';

import {
  incrementCount,
  decrementCount,
  resetCount,
  counterSelector,
} from '../../../logic/counter/ducks/counter';

import { Counter } from './counter';

const mapStateToProps = state => ({
  count: counterSelector(state),
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount,
};

export const CounterEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
