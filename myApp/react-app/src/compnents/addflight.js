import React,{useState} from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';


function Addflight() {
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
 const [BaggageAllowance, setBag] = useState()
 const [Type, setType] = useState();
 const [TicketPrice, setPrice] = useState();

 
 


  return (
    <form onSubmit={(event)=> axios.post('http://localhost:8080/flight/Addflight',{
   
   Flight_number:Flight_number,
DepartureTime:DepartureTime ,
  To:TO ,
  From:From ,
  ArrivalTime:ArrivalTime,
  
  First:First ,
 
  EconomySeats: EconomySeats,
  BusinessSeats:BusinessSeats ,
  ArrivalTerminal: ArrivalTerminal,
  DepartureTerminal:DepartureTerminal,
  BaggageAllowance : BaggageAllowance,
  Type : Type,
  TicketPrice : TicketPrice,
  
  
    }).then(window.open("http://localhost:3000/flight/Showflights"))}>
    <div className="Addflight">
    <header className="Addflight-header">
    
        
        
            <br/>
            
    <h2>Add your flight details</h2>
    <br/>
    
    <label>
    Flight number:
    <br/>
    <TextField variant="standard" name="Flight_number"  placeholder="Flight_number" onChange={event=>setfn(event.target.value)} />
  </label>
  <br/>
  <label>
  DepartureTime:
  <br/>
    <TextField variant="standard" name="DepartureTime" placeholder="DepartureTime" onChange={event=>setDT(event.target.value)}  />
  </label>
  <br/>
  <label>
    To:
    <br/>
    <TextField variant="standard" name="To"  placeholder="To" onChange={event=>setto(event.target.value)} />
  </label>
  <br/>
  
  <label>
    From:
    <br/>
    <TextField variant="standard" name="From"  placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </label>
  <br/>
  <label>
  ArrivalTime:
  <br/>
    <TextField variant="standard" name="ArrivalTime" placeholder="ArrivalTime" onChange={event=>setat(event.target.value)} />
  </label>
  <br/>
  <label>
  
  <label>
    First:
    <br/>
    <TextField variant="standard" name="First"  placeholder="First" onChange={event=>setF(event.target.value)}  />
  </label>
  <br/>
  EconomySeats:
  <br/>
    <TextField variant="standard" name="EconomySeats" placeholder="EconomySeats" onChange={event=>setE(event.target.value)} />
  </label>
  <br/>
    <label>
    BusinessSeats:
    <br/>
    <TextField variant="standard" name="BusinessSeats" placeholder="BusinessSeats" onChange={event=>setB(event.target.value)}  />
  </label>
  <br/>
  <label>
    ArrivalTerminal:
    <br/>
    <TextField variant="standard" name="ArrivalTerminal"  placeholder="ArrivalTerminal" onChange={event=>setater(event.target.value)}  />
  </label>
  <br/>
  <label>
    DepartureTerminal:
    <br/>
    <TextField variant="standard" name="DepartureTerminal"  placeholder="DepartureTerminal" onChange={event=>setDter(event.target.value)}  />
  </label>
  <br/>

  <label>
    BaggageAllowance:
    <br/>
    <TextField variant="standard" name="BaggageAllowance"  placeholder="BaggageAllowance" onChange={event=>setBag(event.target.value)}  />
  </label>
  <br/>
  <label>
    Type:
    <br/>
    <TextField variant="standard" name="Type"  placeholder="Type" onChange={event=>setType(event.target.value)}  />
  </label>
  <br/>
  <label>
    TicketPrice:
    <br/>
    <TextField variant="standard" name="TicketPrice"  placeholder="TicketPrice" onChange={event=>setPrice(event.target.value)}  />
  </label>
  <br/>
  <br/>
             
  <Button variant="contained"  type="submit" color="primary" > Add flight </Button>

            
                   </header>
        </div>
        </form>
    );
    }
    
    export default Addflight;
    