import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
function Showflights() {


  
  
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
 
          return( <div className ="row">
          
          <p className="left-txt"> <b>Flight Number={u.FlightNumber}</b> </p>
          <p className="left-txt"> <b>DepartureTime={u.  DepartureTime}</b> </p>
          <p className="left-txt"> <b>To={u.To}</b> </p>
          <p className="left-txt"> <b>From={u.From}</b> </p>
          <p className="left-txt"> <b>ArrivalTime={u.ArrivalTime}</b> </p>
          <p className="left-txt"> <b>First={u.First}</b> </p>
          <p className="left-txt"> <b>EconomySeats={u.EconomySeats}</b> </p>
          <p className="left-txt"> <b>BusinessSeats={u.BusinessSeats}</b> </p>
          <p className="left-txt"> <b>ArrivalTerminal={u.ArrivalTerminal}</b> </p>
          <p className="left-txt"> <b>DepartureTerminal={u.DepartureTerminal}</b> </p>
     </div>) 
         
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