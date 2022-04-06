import React, { useState }from "react";
import AddDentist from './AddAssistant'
import AddAssistant from "./AddAssistant";
import AddClient from "./AddClient";
import UserList from "./UserList";
import {clients, assistants, dentists} from "./utils"
import "./index.css"

export default function Home() {
    const [contacts, setContacts] = useState([clients, dentists, assistants]);

    const addContact = contact => {
        setContacts((contacts) =>[...contacts, contact]); 
    }
    const handleSick = (entry, idx) => {
        setContacts((contacts) => [
          ...contacts.slice(0, idx),
          { ...contacts[idx], [entry[0]]: entry[1] },
          ...contacts.slice(idx + 1, contacts.length),
        ]);
        setContacts(prevState => {
            console.log("prevState",prevState)
            return prevState
        })
      };
  
    console.log(contacts);

    return(
    <div>
        <UserList contacts={contacts}/>
        <AddClient addContact={addContact} handleSick={handleSick}/>
        <AddAssistant addContact={addContact}  handleSick={handleSick}/>
        <AddDentist addContact={addContact} />
        
    </div>

    )
}
