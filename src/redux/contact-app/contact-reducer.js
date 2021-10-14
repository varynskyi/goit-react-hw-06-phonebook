import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import actions from './contact-actions';

const initialState = [
  { id: 'id-1', name: 'Denzel Hayes Washington Jr', number: '459-12-56' },
  { id: 'id-2', name: 'Julia Roberts', number: '443-89-12' },
  { id: 'id-3', name: 'Jennifer Aniston', number: '645-17-79' },
  { id: 'id-4', name: 'Robert De Niro', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [actions.formSubmitHandler]: (state, { payload }) => {
    const doubleContact = state.find(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase()),
    );

    const variable =
      doubleContact && doubleContact.name.length === payload.name.length;

    if (variable) {
      toast.error(`${payload.name} is already in contacts`);
      return [...state];
    } else {
      toast.success(`${payload.name} add to Contacts`);
      return [payload, ...state];
    }
  },

  [actions.deleteContact]: (state, { payload }) => {
    console.log(payload.name);
    toast.success(`${payload.name} delete!`);
    return state.filter(contact => contact.id !== payload.contactId);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
