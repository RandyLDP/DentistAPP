import React from 'react';
import userlist from './userlist.css'

export default function UserList ({contacts}){
    
    return(
        <div className="container">
        <table >
            <thead>
                <tr className="table-header">
                    <th className=" col col-1">Name</th>
                    <th className=" col col-2">Surname</th>
                    <th className=" col col-3">Email</th>
                    <th className=" col col-4">phone</th>

                </tr>
            </thead>
            <tbody>
                {contacts.map(contacts =>
                    <tr  className="table-row" key={contacts.phone}>
                        <td className=" col col-1">{contacts.first_name}</td>
                        <td className=" col col-2">{contacts.last_name}</td>
                        <td className=" col col-3">{contacts.email}</td>
                        <td className=" col col-4">{contacts.phone}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}