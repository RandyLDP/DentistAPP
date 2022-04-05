import React, {useState} from "react";
import {clients} from "./utils"
import  "./userlist.css"

const AddClient = ({addContact}) => {
    const [client, setClient] = useState(clients)
   
    const onChangeClient = (e) =>{
            setClient({...client, [e.target.name] : e.target.value})
    }
   
    const handleSubmit = (e) =>{
            e.preventDefault();
            addContact(client);
            setClient({first_name: client.first_name, 
                        last_name: client.last_name, 
                        phone: client.phone, 
                        email: client.email
                     });}

    const isSick = client.isSick

    const handleSick = () =>{
        setClient(client => ({ ...client, [isSick]: !client[isSick]})
        )
        console.log('working')
        
        setClient(prevState => {
            console.log("prevState",prevState)
            return prevState
        })
            }

    
    

   return (
   <div>
       
        <form onSubmit={handleSubmit}>
   
           <input 
           type="text"
           value = {client.first_name}
           placeholder="name"
           name = "first_name"
           onChange={onChangeClient}/>
           
           <input 
           type="text"
           value = {client.last_name}
           name="last_name"
           placeholder="surname"
           onChange={onChangeClient}/>
       
           <input 
           type="email"
           value = {client.email}
           name="email"
           placeholder="email"
           onChange={onChangeClient}/>
   
           <input 
           type="number"
           value = {client.number}
           name="phone"
           placeholder="phone"
           onChange={onChangeClient}/>
           
           <button >Add Client</button>
           </form>
           <tbody  className="tablerow">
            {clients.map((client) => (
                <tr className="table-row" style={{backgroundColor: isSick && 'red'}} key={client.phone}>
                    <td className=" col col-1">{client.first_name}</td>
                    <td className=" col col-2">{client.last_name}</td>
                    <td className=" col col-3">{client.email}</td>
                    <td className=" col col-4">{client.phone}</td>
                    <td><button key={client.phone} onClick={() => handleSick()}>Sick</button></td>
                </tr> )
                )}
        </tbody>
           
   </div>
   )}
   
   
   export default AddClient