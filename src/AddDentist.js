import React, {useState} from "react";


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
            addContact(dentist);
            setDentist({first_name: "",last_name: "",number: "",email: ""});
    }
    
   const handleSick = (e) => {
            e.preventDefault();
            const isSick = dentist.isSick;
        {isSick && <p style={{color:"red"}}> </p>}}

   
   return (
   <div>
           23
           <form onSubmit={handleSubmit}>
   
           <input 
           type="text"
           required
           value = {dentist.first_name}
           placeholder="name"
           name = "first_name"
           onChange={onChangeDentist}/>
           
           <input 
           type="text"
           required
           value = {dentist.last_name}
           name="last_name"
           placeholder="surname"
           onChange={onChangeDentist}/>
       
           <input 
           type="email"
           required
           value = {dentist.email}
           name="email"
           placeholder="email"
           onChange={onChangeDentist}/>
   
           <input 
           type="number"
           required
           value = {dentist.number}
           name="phone"
           placeholder="phone"
           onChange={onChangeDentist}/>
           
           <button type="submit">Add Dentist</button>
           <button onClick={handleSick}>Sick!</button>
           </form>
           
   </div>
   )}
   
   
   export default AddDentist