import React, {useState} from "react";
import Home from "./Home";
import UserList from "./UserList";


const AddDentist = ({addContact}) => {
 const [dentist, setDentist] = useState({
         first_name: "",
         last_name: "",
         phone: "",
         email: "",
         isSick: false,
         id: Date.now()
 })

 const onChangeDentist = (e) =>{
         setDentist({...dentist, [e.target.name] : e.target.value})
 }

 const handleSubmit = (e) =>{
         e.preventDefault();
         addContact({ dentist });
         setDentist({first_name: "",last_name: "",phone: "",email: ""});
 }
 

return (
<div>
        <form onSubmit={handleSubmit}>

        <input 
        type="text"
        value = {dentist.first_name}
        placeholder="name"
        name = "first_name"
        onChange={onChangeDentist}/>
        
        <input 
        type="text"
        value = {dentist.last_name}
        name="last_name"
        placeholder="surname"
        onChange={onChangeDentist}/>
    
        <input 
        type="email"
        value = {dentist.email}
        name="email"
        placeholder="email"
        onChange={onChangeDentist}/>

        <input 
        type="text"
        value = {dentist.number}
        name="phone"
        placeholder="phone"
        onChange={onChangeDentist}/>
        
        <button type="submit">Add</button>
        </form>
</div>
)}


export default AddDentist