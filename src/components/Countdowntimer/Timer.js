import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import classes from './Timer.module.css';
const Timer = () => {
    const endtime=new Date('aug 3 2021 19:8:30').getTime();
    const [currentime, setcurrentime] = useState(new Date().getTime());
    const gap = endtime-currentime;

    const seconds=1000;
    const minutes=seconds*60;
    const hours=minutes*60;
    const days=hours*24;

    let getdays=Math.floor(gap/days);
    let gethours=Math.floor((gap%days)/hours);
    let getminutes=Math.floor((gap%hours)/minutes);
    let getseconds=Math.floor(gap%minutes/seconds);
   

// console.log((gap%days)/hours);
//     console.log(getdays);
//     console.log(gethours);
//     console.log(getminutes);


       useEffect(() => {
              setTimeout(() => setcurrentime(new Date().getTime()), 1000);
          }, [currentime])

   
    return (
        <div>
            {(gap>0)?(
           <Table striped bordered hover variant="dark"  className={classes.maintable} >
               <thead>
               <tr ><th>days</th><th>hours</th><th>minutes</th><th>seconds</th></tr>
               </thead>
               <tbody>
               <tr className={classes.trow}><td>{getdays}</td><td>{gethours}</td><td>{getminutes}</td><td>{getseconds}</td></tr>
               </tbody>
            </Table>):<h1 className={classes.coundownheading}>THE OFFER IS REDIRECTED TO SESHA</h1>}

            
        </div>
    )
}

export default Timer
