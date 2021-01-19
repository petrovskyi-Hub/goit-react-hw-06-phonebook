import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';
import storage from '../services/StorageServices';

const initialState = {
  contacts: {
    items: storage.load('Contacts'),
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      const contact = {
        id: shortid.generate(),
        name: payload.name,
        number: payload.number,
      };

      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, contact],
        },
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== payload),
        },
      };

    case 'filter/setFilter':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
