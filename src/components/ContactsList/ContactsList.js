import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import storage from '../../services/StorageServices';
import * as actions from '../../redux/actions';

function ContactList({ filter, contacts, deleteContact }) {
  useEffect(() => {
    storage.save('Contacts', contacts);
  }, [contacts]);

  const filterContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContacts = filterContacts(filter, contacts);

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
            onClick={() => deleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
