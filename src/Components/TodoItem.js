import React from "react";

const TodoItem = ({ items,ondel }) => {
    

  return (
  <>
  <div className='container'>
    
   <h4 className="">{items.title}</h4>
   <p>{items.desc}</p>
   <button type="button" className="btn btn-danger " onClick={()=>{ondel(items)}}>delete</button>
    

    
  
  </div>
  </>
  );
};

export default TodoItem;
