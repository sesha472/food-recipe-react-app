import React,{useState} from 'react'
import Recipeimgs from './Recipeimgs';

const Foodrecipe = () => {
    const [search, setsearch] = useState("");
    const [data, setdata] = useState([])
    const YOUR_APP_ID = "f24bea42";
    const YOUR_APP_KEY ="8cb6c507c4c46a7a1baceba3a3d1dc01";
   const resipidata=(e)=>{
    
     e.preventDefault();
     fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
        response => response.json()
      ).then(
        data =>setdata(data.hits) 
      )
    }
    // data.hits[1].recipe.image
    return (
        <div >
            <form onSubmit={resipidata} className="shadow-lg" style={{width:"50%",margin:"20px auto",backgroundColor:"hotpink",padding:"30px",borderRadius:"10px"}}>
                <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} /><br/>
                <input className="btn btn-info" type="submit" value="Enter recipe name"  />
            </form>
             <Recipeimgs imgdata={data}/>
            
        </div>
    )
}

export default Foodrecipe
