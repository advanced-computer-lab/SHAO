import React,{useState} from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';


function Profile() {
 const [Name, setn] = useState();
 const [Email, sete] = useState();
 const [Password, setp] = useState();
 const [Age, seta] = useState();
 const [BornIn, setb] = useState();
 const [LivesIn, setl] = useState();
 const [PhoneNumber, setpn] = useState();
 const [isAdmin, setia] = useState();
 const [ReservedFlights, setrf] = useState();
 const [ReservedSeats, setrs] = useState();

 
 


  return (
    <form onSubmit={(event)=> axios.post('http://localhost:8080/user/Profile',{
   
  Name:Name,
  Email:Email ,
  Password:Password,
  Age:Age,
  BornIn:BornIn,
  LivesIn:LivesIn,
  PhoneNumber: PhoneNumber,
  isAdmin:isAdmin ,
  ReservedFlights: ReservedFlights,
  ReservedSeats:ReservedSeats,
 
  
  
    })}>
    <div className="Profile">
    <header className="Profile-header">
    
        
        
            
            
    <h1>Account Settings</h1>
    
    <label>
    Name:
    <input  type="text" name="Name"  placeholder="Name" onChange={event=>setn(event.target.value)} />
  </label>
  <br/>
  <label>
  Email:
    <input   type="text" name="Email" placeholder="Email" onChange={event=>setImmediate(event.target.value)}  />
  </label>
  <br/>
  <label>
    Password:
    <input  type="text" name="Password"  placeholder="Password" onChange={event=>setp(event.target.value)} />
  </label>
  <br/>
  
  <label>
    Age:
    <input  type="text" name="Age"  placeholder="Age" onChange={event=>seta(event.target.value)}  />
  </label>
  <br/>
  <label>
  BornIn
    <input   type="text" name="BornIn" placeholder="BornIn" onChange={event=>setb(event.target.value)} />
  </label>
  <br/>
  <label>
  
  <label>
    LivesIn:
    <input  type="text" name="LivesIn"  placeholder="LivesIn" onChange={event=>setl(event.target.value)}  />
  </label>
  <br/>
  PhoneNumber:
    <input   type="text" name="PhoneNumber" placeholder="PhoneNumber" onChange={event=>setpn(event.target.value)} />
  </label>
  <br/>
    <label>
    isAdmin:
    <input   type="text" name="isAdmin" placeholder="isAdmin" onChange={event=>setia(event.target.value)}  />
  </label>
             
  <Button variant="contained"  type="submit" color="primary" >Save</Button>

            
        </header>
        </div>
        </form>
    );
    }
    
    export default Profile;
    