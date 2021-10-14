import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getValue } from '../redux/contact-app/contact-selector';
import contactActions from '../redux/contact-app/contact-actions';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getValue);

  const onChange = e => dispatch(contactActions.changeFilter(e.target.value));

  return (
    <div className={s.container}>
      <p className={s.label} htmlFor={value.id}>
        Find contact
      </p>
      <input
        id={uuidv4()}
        className={s.input}
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
        placeholder="find"
        autoComplete="off"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
