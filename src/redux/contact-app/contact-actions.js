import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const formSubmitHandler = createAction('contact/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contact/delete', (contactId, name) => ({
  payload: {
    contactId,
    name,
  },
}));

const changeFilter = createAction('contact/changeFilter');

export default { formSubmitHandler, deleteContact, changeFilter };
