import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';
import storage from '../services/StorageServices';

const itemsReducer = (state = storage.load('Contacts'), { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      const contact = {
        id: shortid.generate(),
        name: payload.name,
        number: payload.number,
      };

      return [...state, contact];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/setFilter':
      return payload;

    default:
      return state;
  }
};

const contactsReduucer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReduucer = combineReducers({
  contacts: contactsReduucer,
});

const store = createStore(rootReduucer, composeWithDevTools());

export default store;
