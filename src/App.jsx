import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';




function App() {
  // const STORAGE_KEY = 'listOfContact';
 
  // useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(contactsList)) });
  return (
    <>
      <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList />
    </div>
      
    </>
  )
}

export default App












































































