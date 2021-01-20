import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsList.module.css';
import { deleteContact } from '../../redux/Contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            {name}: {number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}
