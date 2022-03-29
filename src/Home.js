import React, { useState }from "react";
import AddDentist from './AddAssistant'
import AddAssistant from "./AddAssistant";
import AddClient from "./AddClient";
import UserList from "./UserList";

export default function Home() {
    const [contacts, setContacts] = useState([]);

    const addContact = contact => {
        setContacts([...contacts, contact]); 
    }
    console.log(contacts);

    return(
    <div>
        <AddClient addContact={addContact}/>
        <AddAssistant addContact={addContact}/>
        <AddDentist addContact={addContact}/>
        <UserList contacts={contacts}/>
    </div>

    )
}
