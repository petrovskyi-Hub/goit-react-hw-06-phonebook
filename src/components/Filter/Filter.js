import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Filter.module.css';
import * as actions from '../../redux/actions';

function Filter({ value, setFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={setFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: event => dispatch(actions.setFilter(event.currentTarget.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
