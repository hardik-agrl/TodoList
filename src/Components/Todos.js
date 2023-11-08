// import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = ({todo,ondel,onsubmit}) => {
    

//     const [item, setItem] = useState(
  
//     {
//       sno: 1,
//       title: "Work",
//       desc: "have to complete the work",
//     },
//     {
//       sno: 2,
//       title: "home",
//       desc: "have to complete the home",
//     },
//   );

  let mystyle={
    minHeight :"30vh"
  }
  
  return (
    <>
     <div className="container" ></div>
      
<div className='container'>
<h1 class='mt-5'>Todo Items</h1>
        {todo.length===0?<h4>No item</h4>:
          todo.map((obj)=>{
            return <TodoItem items={obj} key={obj.sno} ondel={ondel}/>
          })
        } 
        {/* <TodoItem items={item[0]}/> */}
        
      </div>
      <div style={mystyle}></div>
  </> 
    
  );
};

export default Todos;
