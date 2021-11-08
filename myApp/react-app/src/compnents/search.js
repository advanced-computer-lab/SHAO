import React,{useState} from "react";
import axios from "axios";
import SearchResults from "./searchResults";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

import Button from '@material-ui/core/Button';
// function Handledelete(event){
//   var s=String(event.currentTarget.id);
//   console.log(s);
//   const url='http://localhost:8080/flight/delete/' + s
//   axios.post(url)
//   window.location.reload(false);
// }
// function Handleupdate(event){
//   var s=String(event.currentTarget.id);
//   console.log(s);
//   const url='http://localhost:8080/flight/update/' + s

//   axios.post(url)
//   window.location.reload(false);

//   }
   




function Search() {
  const Handleclick=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:8080/flight/search',{
     
     FlightNumber : Flight_number,
     DepartureTime : DepartureTime ,
     To : TO ,
     From : From ,
     ArrivalTime : ArrivalTime,
    
     First : First ,
   
     EconomySeats : EconomySeats,
     BusinessSeats : BusinessSeats ,
     ArrivalTerminal : ArrivalTerminal,
     DepartureTerminal : DepartureTerminal,
  
      
       }).then((res) => {
         <SearchResults props={res} />
     console.log(res)
     console.log(res.data)

  })
  }
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
      
     <form onSubmit={Handleclick}
     //{ (event)=> {
    
  //      axios.post('http://localhost:8080/flight/search',{
   
  //  FlightNumber : Flight_number,
  //  DepartureTime : DepartureTime ,
  //  To : TO ,
  //  From : From ,
  //  ArrivalTime : ArrivalTime,
  
  //  First : First ,

  //  EconomySeats : EconomySeats,
  //  BusinessSeats : BusinessSeats ,
  //  ArrivalTerminal : ArrivalTerminal,
  //  DepartureTerminal : DepartureTerminal,
   

    
    

  //   }).then(res=>{console.log(res)} ).catch((err)=>
  //   console.log(err))}}
  >
    
    <div className="Search">
    <header className="search-header">
    
        
        
            
            
    <h1>Search</h1>
    
    <label>
    Flight number:
    <input  type="text" name="Flight_number"  placeholder="Flight_number" value={Flight_number} onChange={event=>setfn(event.target.value)} />
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
             
            <Button variant="contained"  type="submit" color="primary"  value='submit ' > Submit </Button>
            
            
                   </header>
        </div>
       </form>
    );
    }
    
    export default Search;
    