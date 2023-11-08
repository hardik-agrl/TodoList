import "./App.css";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { useState,useEffect } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddTodo from "./Components/AddTodo";
// import { useState } from "react";

function App() {
  let initTodo;
  if(localStorage.getItem("item")===null){
    initTodo=[];

  }
  else{
    initTodo=JSON.parse(localStorage.getItem("item"));
  }
  const addTodo=(text,desc)=>{
    console.log("i am adding this todo",text,desc)
    let sno;
    if(item.length==0){
    sno=1}
    else
    {sno= item[item.length-1].sno+1}
    
    const mytodo ={
      sno:sno,
      title:text,
      desc:desc,

    } 
    console.log(mytodo);
    setItem([...item,mytodo]);
    // localStorage.setItem("item",JSON.stringify(item));
  }
const ondel = (todo)=>{
  
  setItem(item.filter((e)=>{
    return e!== todo;
    
  }
  )
  );
  
}


  const [item, setItem] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("item",JSON.stringify(item));
  },[item])

    // {
    //   sno: 1,
    //   title: "Work",
    //   desc: "have to complete the work",
    // },
    // {
    //   sno: 2,
    //   title: "home",
    //   desc: "have to complete the home",
    // },
    // ]
    //   );




  
  
  return (
<Router>
    
    <Navbar title="Todo List" />
    {/* <AddTodo addTodo={addTodo}/> */}
    <Routes>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/" element={<><AddTodo addTodo={addTodo}/><Todos todo={item} ondel={ondel} onsubmit={onsubmit}/></>}/>
        {/* <Route path="/" element={<AddTodo addTodo={addTodo}/>}/> */}
        
    </Routes>
      
      <Footer />
      {/* <About /> */}
  
</Router>
  );
}

export default App;
