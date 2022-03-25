import React, { useState }from "react";
import AddDentist from './AddDentist'
import UserList from "./UserList";

export default function Home() {
    const [contacts, setContacts] = useState([]);

    const addContact = contact => {
        setContacts([...contacts, contact]); 
    }
    console.log(contacts);

    return(
    <div>
        <AddDentist addContact={addContact}/>
        <UserList contacts={contacts}/>
    </div>

    )
}
