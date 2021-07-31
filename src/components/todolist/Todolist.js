import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Inputdata from './Inputdata';
import './Todolist.css';


function Todolist() {
  const [userdata, setuserdata] = useState([]);
  
   const formdata=(data)=>{
      const copydata=[...userdata];
      copydata.push({title:data,id:Math.random().toString()})
     setuserdata(copydata)
     console.log(data);
   }

   const selfclicked=(deltid)=>{  
     const  copydata= userdata.filter((todo,index)=> todo.id !== deltid  );
    
      setuserdata(copydata);
    }
   

  return (
    <div className="Todolist">
    <h1>namasthey</h1>
    <Inputdata Usercompletedata={formdata}/>

    { userdata.map((item,index)=><div style={{display:"flex",listStyle:"none",textAlign:"left",margin:"4px auto",justifyContent:"space-around"}}><li key={item.id} className="display-2 shadow" > {item.title}</li> <Button variant="outline-danger"  onClick={()=>selfclicked(item.id)}>delt</Button></div> )}
    </div>
  );
}

export default Todolist;
