import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './Contacts/contacts-reducer';
import { filterReducer } from './Filter/filter-reducer';

const contactsReduucer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReduucer = combineReducers({
  contacts: contactsReduucer,
});

const store = configureStore({
  reducer: rootReduucer,
});

export default store;
