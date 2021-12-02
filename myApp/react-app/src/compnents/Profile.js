import React,{useState, useEffect} from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
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

 const s = "61a52b332239b52f7ef5cc68";

 const [userList,setUserList]= useState([]);
 useEffect(()=> {
 axios.get('http://localhost:8080/user/Profile/' + s)
 .then((res)=>{

  setn(res.data.Name);
  sete(res.data.Email);
  setp(res.data.Password);
  seta(res.data.Age);
  setb(res.data.BornIn);
  setl(res.data.LivesIn);
  setpn(res.data.PhoneNumber);





   console.log(res.data);
   setUserList(res.data);
 })   
},[]);
 


  return (
    <form onSubmit={(event)=> axios.post('http://localhost:8080/user/update/' + s,{
   
  Name:Name,
  Email:Email ,
  Password:Password,
  Age:Age,
  BornIn:BornIn,
  LivesIn:LivesIn,
  PhoneNumber: PhoneNumber
  
  
    })}>
    <div className="Profile">
    <header className="Profile-header">
    
        
        
            
    <br/>
    <br/>

    <h3>Account Settings</h3>
    <br/>
    <br/>

    
    <label>
    Name:
    <TextField variant="standard"  type="text" name="Name"  placeholder={Name} onChange={event=>setn(event.target.value)} />
  </label>
  <br/>
  <br/>
  <label>
  Email:
    <TextField variant="standard"   type="text" name="Email" placeholder={Email} onChange={event=>sete(event.target.value)}  />
  </label>
  <br/>
  <br/>
  <label>
    Password:
    <TextField variant="standard"  type="text" name="Password"  placeholder={Password} onChange={event=>setp(event.target.value)} />
  </label>
  <br/>
  <br/>
  
  <label>
    Age:
    <TextField variant="standard"  type="text" name="Age"  placeholder={Age} onChange={event=>seta(event.target.value)}  />
  </label>
  <br/>
  <br/>
  <label>
  Born In:
    <TextField variant="standard"   type="text" name="BornIn" placeholder={BornIn} onChange={event=>setb(event.target.value)} />
  </label>
  <br/>
  <br/>
  <label>
  
  <label>
    Lives In:
    <TextField variant="standard"  type="text" name="LivesIn"  placeholder={LivesIn} onChange={event=>setl(event.target.value)}  />
  </label>
  <br/>
  <br/>
  Phone Number:
    <TextField variant="standard"   type="text" name="PhoneNumber" placeholder={PhoneNumber} onChange={event=>setpn(event.target.value)} />
  </label>
  <br/>
  <br/>

    
             
  <Button variant="contained"  type="submit" color="primary" >Save</Button>

            
        </header>
        </div>
        </form>
    );
    }
    
    export default Profile;
    