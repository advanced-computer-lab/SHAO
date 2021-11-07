import React,{useState} from "react";
import axios from "axios";


function Search() {
 const [Flight_number, setfn] = useState();
 const [DepartureTime, setDT] = useState();
 const [TO, setto] = useState();
 const [From, setFrom] = useState();
 const [ArrivalTime, setat] = useState();
 const [First, setF] = useState();
 const [EconomySeats, setE] = useState();
 const [BusinessSeats, setB] = useState();
 const [ArrivalTerminal, setater] = useState();
 const [DepartureTerminal, setDter] = useState();


  return (
      
    <form onSubmit={(event)=> axios.post('http://localhost:8080/flight/search',{
   
   FlightNumber : Flight_number,
   DepartureTime : DepartureTime ,
   To : TO ,
   From : From ,
   ArrivalTime : ArrivalTime,
  
   First : First ,
 
   EconomySeats : EconomySeats,
   BusinessSeats : BusinessSeats ,
   ArrivalTerminal : ArrivalTerminal,
   DepartureTerminal : DepartureTerminal

    })}>
    
    <div className="Search">
    <header className="search-header">
    
        
        
            
            
    <h1>Search</h1>
    
    <label>
    Flight number:
    <input  type="text" name="Flight_number"  placeholder="Flight_number" onChange={event=>setfn(event.target.value)} />
  </label>
  <br/>
  <label>
  DepartureTime:
    <input   type="text" name="DepartureTime" placeholder="DepartureTime" onChange={event=>setDT(event.target.value)}  />
  </label>
  <br/>
  <label>
    To:
    <input  type="text" name="To"  placeholder="To" onChange={event=>setto(event.target.value)} />
  </label>
  <br/>
  
  <label>
    From:
    <input  type="text" name="From"  placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </label>
  <br/>
  <label>
  ArrivalTime
    <input   type="text" name="ArrivalTime" placeholder="ArrivalTime" onChange={event=>setat(event.target.value)} />
  </label>
  <br/>
  <label>
  
  <label>
    First:
    <input  type="text" name="First"  placeholder="First" onChange={event=>setF(event.target.value)}  />
  </label>
  <br/>
  EconomySeats:
    <input   type="text" name="EconomySeats" placeholder="EconomySeats" onChange={event=>setE(event.target.value)} />
  </label>
  <br/>
    <label>
    BusinessSeats:
    <input   type="text" name="BusinessSeats" placeholder="BusinessSeats" onChange={event=>setB(event.target.value)}  />
  </label>
  <br/>
  <label>
    ArrivalTerminal:
    <input  type="text" name="ArrivalTerminal"  placeholder="ArrivalTerminal" onChange={event=>setater(event.target.value)}  />
  </label>
  <br/>
  <label>
    DepartureTerminal:
    <input  type="text" name="DepartureTerminal"  placeholder="DepartureTerminal" onChange={event=>setDter(event.target.value)}  />
  </label>
  <br/>
             
            <input type="submit"value='submit'/>
            
                   </header>
        </div>
        </form>
    );
    }
    
    export default Search;
    