import React from 'react';

export default function UserList ( {contacts} ){
    return(
        <div>
            {contacts.map((contact) => (
                <div key={contact.phone}>
                    <p>{contact.first_name}</p>
                    <p>{contact.last_name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            ))}
        </div>
    )
}