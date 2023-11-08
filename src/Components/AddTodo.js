import React from 'react'
import { useState } from 'react';

const AddTodo = ({addTodo}) => {


    const onsubmit=(e)=>{
        e.preventDefault();
        if(!text || !disc){
            alert("Title or discription cannot be blank");

        }
        else{
            
            addTodo(text,disc);
        }
        setText("");
        setDisc("");
    }


    const [text, setText] = useState("");
  const [disc, setDisc] = useState("");
  let onchangetext=(event)=>{
    setText(event.target.value);
  }
  let onchangedisc=(event)=>{
    setDisc(event.target.value);
  }
  let newItem={
    title:text,
    disc:disc,
}

    
  return (

    <div className='container'>
        <h1 className='mt-5'>Add Todo Items</h1>
      <form onSubmit={onsubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label h4">Todo item</label>
    <input type="text" value={text} onChange={onchangetext} className="form-control border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label h4" >Discription</label>
    <input type="text" value={disc} onChange={onchangedisc} className="form-control border-primary" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
