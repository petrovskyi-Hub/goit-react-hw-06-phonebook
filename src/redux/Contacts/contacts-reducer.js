import { createReducer } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { addContact, deleteContact } from './contacts-actions';

export const itemsReducer = createReducer([], {
  [addContact]: (state, action) => {
    const contact = {
      id: shortid.generate(),
      name: action.payload.name,
      number: action.payload.number,
    };

    return [...state, contact];
  },

  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
