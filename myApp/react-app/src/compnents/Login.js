import React,{useState,useEffect} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';



function Login() {

   /* const Handleclick=(event)=>{
      event.preventDefault()
      axios.post('http://localhost:8080/flight/l',{
       
        Username:Username,
        Password:Password,
    
        
         }).then((res) => {
          setUserList(res.data);
          
       console.log(res)
       console.log(res.data)
  
    })
    }*/

    const [userList,setUserList]= useState([]);
    const [Username, setuser] = useState();
    const [Password, setpass] = useState();
  
      
    return (
        
       <form onSubmit={(event)=> axios.post('http://localhost:8080/flight/login',{
   
        Username:Username,
        Password:Password,
    
    }).then(window.open("http://localhost:3000/flight/Home"))}>
    <div className="login">
    <header className="login-header">
    

      <h1>login</h1>
      
      <label>
      Username:
      <input  type="text" name=" Username"  placeholder=" Username" value={ Username} onChange={event=>setuser(event.target.value)} />
    </label>
    <br/>
    <label>
    Password:
      <input   type="text" name="Password" placeholder="Password" onChange={event=>setpass(event.target.value)}  />
    </label>
    <br/>     
              <Button variant="contained"  type="submit" color="primary"  value='submit ' > login </Button>
              
              
                     </header>
                     </div>
                     </form> 
    );

    }
    export default Login;
