import React, {useState} from "react";


const AddClient = ({addContact}) => {
    const [client, setClient] = useState({
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            isSick: false,
            id: Date.now()
    })
   
    const onChangeClient = (e) =>{
            setClient({...client, [e.target.name] : e.target.value})
    }
   
    const handleSubmit = (e) =>{
            e.preventDefault();
            addContact(client);
            setClient({first_name: "",last_name: "",number: "",email: ""});
    }
    

   
   return (
   <div>
        <form onSubmit={handleSubmit}>
   
           <input 
           type="text"
           required
           value = {client.first_name}
           placeholder="name"
           name = "first_name"
           onChange={onChangeClient}/>
           
           <input 
           type="text"
           required
           value = {client.last_name}
           name="last_name"
           placeholder="surname"
           onChange={onChangeClient}/>
       
           <input 
           type="email"
           required
           value = {client.email}
           name="email"
           placeholder="email"
           onChange={onChangeClient}/>
   
           <input 
           type="number"
           required
           value = {client.number}
           name="phone"
           placeholder="phone"
           onChange={onChangeClient}/>
           
           <button type="submit">Add Client</button>
           
           </form>
           
   </div>
   )}
   
   
   export default AddClient