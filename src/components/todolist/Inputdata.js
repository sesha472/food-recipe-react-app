import React,{useState} from 'react'
import { FormControl } from 'react-bootstrap';

function Inputdata(props) {
    const [data, setdata] = useState("")

    const inputHandler=(e)=>{
        setdata(e.target.value);
    }
    
    const logindata=(e)=>{
        e.preventDefault();
  props.Usercompletedata(data);
    setdata("");
}

    return (
        <div>
            <form onSubmit={logindata}>         
            <FormControl className="inputdata"  type="text" onChange={inputHandler} value={data} />
            </form>
        </div>
    )
}

export default Inputdata;