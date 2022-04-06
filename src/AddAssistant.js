import React, {useState} from "react";
import {assistants} from "./utils"


const AddAssistant = ({addContact}) => {
 const [assistant, setAssistant] = useState(assistants)

 const onChangeAssistant = (e) =>{
         setAssistant({...assistant, [e.target.name] : e.target.value})
 }

 const handleSubmit = (e) =>{
         e.preventDefault();
         addContact(assistant);
         setAssistant({first_name: "",last_name: "",number: "",email: ""});
 }
 const isSick = assistant.isSick
 const handleSick = (entry, idx) => {
        setAssistant((assistants) => [
          ...assistants.slice(0, idx),
          { ...assistants[idx], [entry[0]]: entry[1] },
          ...assistants.slice(idx + 1, assistants.length),
        ]);
        setAssistant(prevState => {
            console.log("prevState",prevState)
            return prevState
        })
      };
 

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
        <tbody  className="tablerow">
            {assistants.map((assistant, idx) => (
                <tr className="table-row" 
                    style={{backgroundColor: isSick && 'red'}} 
                    key={assistant.phone}>
                        <td className=" col col-1">{assistant.first_name}</td>
                        <td className=" col col-2">{assistant.last_name}</td>
                        <td className=" col col-3">{assistant.email}</td>
                        <td className=" col col-4">{assistant.phone}</td>
                        <td>
                            <button onClick={() => handleSick(['isSick', !isSick], idx)}>
                            Set {isSick ? 'Healthy' : 'Sick'}
                            </button>
                        </td>
                </tr> )
                )}
        </tbody>
        
</div>
)}


export default AddAssistant