import React, {useState} from "react";



const AddAssistant = ({addContact}) => {
 const [assistant, setAssistant] = useState({
         first_name: "",
         last_name: "",
         phone: "",
         email: "",
         isSick: false,
         id: Date.now()
 })

 const onChangeAssistant = (e) =>{
         setAssistant({...assistant, [e.target.name] : e.target.value})
 }

 const handleSubmit = (e) =>{
         e.preventDefault();
         addContact(assistant);
         setAssistant({first_name: "",last_name: "",number: "",email: ""});
 }
 

return (
<div>
        
        <form onSubmit={handleSubmit}>

        <input 
        type="text"
        required
        value = {assistant.first_name}
        placeholder="name"
        name = "first_name"
        onChange={onChangeAssistant}/>
        
        <input 
        type="text"
        required
        value = {assistant.last_name}
        name="last_name"
        placeholder="surname"
        onChange={onChangeAssistant}/>
    
        <input 
        type="email"
        required
        value = {assistant.email}
        name="email"
        placeholder="email"
        onChange={onChangeAssistant}/>

        <input 
        type="number"
        required
        value = {assistant.number}
        name="phone"
        placeholder="phone"
        onChange={onChangeAssistant}/>
        
        <button type="submit">Add Assistant</button>
        </form>
        
</div>
)}


export default AddAssistant