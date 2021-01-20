import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { setFilter } from '../../redux/Filter/filter-actions';
import { getFilter } from '../../redux/Filter/filter-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </label>
  );
}
