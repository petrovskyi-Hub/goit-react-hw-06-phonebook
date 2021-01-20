import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemsReducer } from './Contacts/contacts-reducer';
import { filterReducer } from './Filter/filter-reducer';

const contactsReduucer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReduucer = combineReducers({
  contacts: contactsReduucer,
});

const store = createStore(rootReduucer, composeWithDevTools());

export default store;
