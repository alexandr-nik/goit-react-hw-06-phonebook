import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (state, action) => {
     state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
     state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
     state.filter = action.payload;
    },
  },
});

export const { addNewContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;