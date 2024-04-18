

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
// export const contactsReducer = (state = initialState.contacts, action) => {
//     switch (action.type) {
//         case 'contactsList/ADD_CONTACT': {return{...state, items:[...state.items, action.payload]};
//         }
//         default: return state;
//     }
   
// };
export const STORAGE_KEY = 'listOfContact';
  const initialContactList=JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];
   const initialState = {
    contacts: { items: initialContactList, },
    
}
const contactsListSlice = createSlice({
  // Ім'я слайсу
  name: "contactsList",
  // Початковий стан редюсера слайсу
  initialState: initialState.contacts,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      const contactToAdd = { ...action.payload, id: nanoid() };
      state.items.push(contactToAdd);
    },
    deleteContact(state, action) {state.items=state.items.filter(contact => contact.id !== action.payload)},
   
  },
});

// Генератори екшенів
export const { addContact, deleteContact} = contactsListSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsListSlice.reducer;

