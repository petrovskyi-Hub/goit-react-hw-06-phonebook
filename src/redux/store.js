import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './Contacts/contacts-reducer';
import { filterReducer } from './Filter/filter-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
