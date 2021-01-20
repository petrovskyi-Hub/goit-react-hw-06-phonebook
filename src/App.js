import { connect } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import storage from './services/StorageServices';

// storage.save('Contacts', [
//   { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
//   { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
// ]);

function App({ contacts }) {
  useEffect(() => {
    storage.save('Contacts', contacts);
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps)(App);
