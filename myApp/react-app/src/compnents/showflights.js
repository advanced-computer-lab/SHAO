import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
function Showflights({}) {


  
  
    const [userList,setUserList]= useState([]);
    useEffect(() => {
     // Update the document title using the browser API
    axios.get('http://localhost:8080/flight/Showflights')
    .then((res)=>{
      console.log(res.data);
      setUserList(res.data);
    }) //returning the data from the backend  
   },[]);
     return (
         
         userList.map((u) =>{ //flightList /f
 
          return( <div><button key = {u.FlightNumber}>{u.FlightNumber}</button><button>{u.AirPort}</button></div>) 
         
         })
         
     )
 

}
//      <div className="Showflight">
//     <header className="Showflight-header">
        
        
// <h1>All flight :</h1>

//         <form action="../../Showflights" method="post"
//             className="form">
//         <button  type="submit">submit</button>
//         </form>
//     </header>
//     </div>

export default Showflights;