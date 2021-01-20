import { addContact, deleteContact } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
import shortid from 'shortid';
import storage from '../../services/StorageServices';

export const itemsReducer = createReducer(storage.load('Contacts') ?? [], {
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
