import React, { useState }from "react";
import AddDentist from './AddAssistant'
import AddAssistant from "./AddAssistant";
import AddClient from "./AddClient";
import UserList from "./UserList";
import "./index.css"

export default function Home(handleSick) {
    const [contacts, setContacts] = useState([]);

    const addContact = contact => {
        setContacts([...contacts, contact]); 
    }
    console.log(contacts);

    return(
    <div>
        <AddClient addContact={addContact}/>
        <AddAssistant addContact={addContact} />
        <AddDentist addContact={addContact} handleSick={handleSick}/>
        <UserList contacts={contacts}/>
    </div>

    )
}
