import React from 'react';
import classes from './Recipeimgs.module.css';

const Recipeimgs = (props) => {
    console.log(props.imgdata);
    return ( <div className={classes.allitems}  >
            {props.imgdata.map((item,index)=>{
                 return(<div style={{padding: "30px"}} key={item.index} >
                     <div className={classes.itemcard} >
                     <img src={`${item.recipe.image}`} alt="recipe item" />
                     <p>{item.recipe.source}</p>
                     </div>
                 </div>)
             })}
        </div>
    )
}

export default Recipeimgs

// import React from 'react';
// import { Card,Col } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// const Recipeimgs = (props) => {
//     console.log(props.imgdata);
//     return ( <div>
//             {props.imgdata.map((item,index)=>{
//                 return(
//                     <Row xs={2} md={2} className="g-4 m-4"  >
//                {Array.from({ length: 4 }).map((_, idx) => (
//               <Col  key={item.index}>
//                  <Card>
//                    <Card.Img variant="top" src={`${item.recipe.image}`} alt="img text" />
//                    <Card.Body>
//                      <Card.Title>{item.recipe.source}</Card.Title>
//                      <Card.Text>  {Math.round(item.recipe.calories)} </Card.Text>
//                    </Card.Body>
//                  </Card>
//                </Col>
//                 ))}
//                 </Row>
//              ) })}
//         </div>
//     )
// }

// export default Recipeimgs

