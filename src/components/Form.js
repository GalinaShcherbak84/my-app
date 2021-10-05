import React, {useState} from "react";

const Form=(props)=>{
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(value.trim()===""){
            alert('scrivi qualcosa');
            return;
        }
        props.submit(value);
        
        setValue('');
        
    }
    const onChangeText = (e) =>{
        //console.log(e.target.value)
        setValue(e.target.value);
    }
    
        return(
            <div>
               <form onSubmit={handleSubmit}>
                   <input type="text" value={value} placeholder="Aggiungi todo" onChange={onChangeText}/>
               </form>
            </div>
        )
   
}
export default Form;