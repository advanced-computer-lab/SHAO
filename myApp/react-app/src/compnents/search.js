import React,{useState,useEffect} from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
   

function Handledelete(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='http://localhost:8080/flight/delete/' + s
  axios.post(url)
  window.location.reload(false);
  
}



function Search() {


  function Handleupdate(event){
    var s=String(event.currentTarget.id);
    console.log(s);
    axios.post('http://localhost:8080/flight/update/' + s,{
     
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
      console.log(res)
      console.log(res.data)
 
   })
  
    
    
    
  
    }
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
        setUserList(res.data);
        //  setfn(res.data.FlightNumber);
        //  setDT(res.data.DepartureTime);
        //  setto(res.data.TO);
        //  setFrom(res.data.From);
        //  setat(res.data.ArrivalTime);
        //  setF(res.data.First);
        //  setE(res.data.EconomySeats);
        //  setB(res.data.BusinessSeats);
        //  setater(res.data.ArrivalTerminal);
        //  setDter(res.data.DepartureTerminal);

     console.log(res)
     console.log(res.data)

  })
  }
  const [userList,setUserList]= useState([]);
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
  
  <label>
    BaggageAllowance:
    <input  type="text" name="BaggageAllowance"  placeholder="BaggageAllowance" onChange={event=>setDter(event.target.value)}  />
  </label>
  <br/>
  <label>
    Type:
    <input  type="text" name="Type"  placeholder="Type" onChange={event=>setDter(event.target.value)}  />
  </label>
  <br/>
  <label>
    TicketPrice:
    <input  type="text" name="TicketPrice"  placeholder="TicketPrice" onChange={event=>setDter(event.target.value)}  />
  </label>
  <br/>
             
            <Button variant="contained"  type="submit" color="primary"  value='submit ' > Submit </Button>
            
            
                   </header>
                   <Paper>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell>FlightNumber</TableCell>
            <TableCell>DepartureTime</TableCell>
            <TableCell>To</TableCell>
            <TableCell>From</TableCell>
            <TableCell>ArrivalTime</TableCell>
            <TableCell>First</TableCell>
            <TableCell>EconomySeats</TableCell>
            <TableCell>BusinessSeats</TableCell>
            <TableCell>ArrivalTerminal</TableCell>
            <TableCell>DepartureTerminal</TableCell>
            <TableCell>BaggageAllowance</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>TicketPrice</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(rows => (
            <Row row={rows} />)
          )}
        </TableBody>
      </Table>
    </Paper>
     )
        </div>
       </form>
       
    );
    }
    
    export default Search;
    
function Row(props){
  function Handleupdate(event){
    var s=String(event.currentTarget.id);
    console.log(s);
    axios.post('http://localhost:8080/flight/update/' + s,{
     
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
      BaggageAllowance : BaggageAllowance,
      Type : Type,
      TicketPrice : TicketPrice,

   
       
        }).then((res) => {
      console.log(res)
      console.log(res.data)
 
   })
  
    
    window.location.reload(false);
    
  
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    



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
  const [BaggageAllowance, setBag] = useState();
  const [Type, setType] = useState();
  const [TicketPrice, setPrice] = useState();
   useEffect(() => {setfn(props.row.FlightNumber);
    setDT(props.row.DepartureTime);
    setto(props.row.To);
    setFrom(props.row.From);
    setat(props.row.ArrivalTime);
    setF(props.row.First);
    setE(props.row.EconomySeats);
    setB(props.row.BusinessSeats);
    setater(props.row.ArrivalTerminal);
    setDter(props.row.DepartureTerminal);
    setBag(props.row.BaggageAllowance);
    setType(props.row.Type);
    setPrice(props.row.TicketPrice);
    
    


  },[])
  return(<TableRow key={props.row._id}>
    <TableCell><TextField variant="standard"  type="text" name="Flight_number"  placeholder="Flight_number" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><TextField variant="standard"   type="text" name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </TableCell>
    <TableCell><TextField variant="standard"   type="text" name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>
  <TableCell> <TextField variant="standard"  type="text" name="First"  placeholder="First" value={First} onChange={event=>setF(event.target.value)}  />
</TableCell>

    <TableCell> <TextField variant="standard"   type="text" name="EconomySeats" placeholder="EconomySeats" value= {EconomySeats} onChange={event=>setE(event.target.value)} /></TableCell>
    <TableCell> <TextField variant="standard"   type="text" name="BusinessSeats" placeholder="BusinessSeats" value={BusinessSeats} onChange={event=>setB(event.target.value) }  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="ArrivalTerminal"  placeholder="ArrivalTerminal" value={ArrivalTerminal} onChange={event=>setater(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="DepartureTerminal"  placeholder="DepartureTerminal" value= {DepartureTerminal} onChange={event=>setDter(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="BaggageAllowance"  placeholder="BaggageAllowance" value= {BaggageAllowance} onChange={event=>setBag(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="Type"  placeholder="Type" value= {Type} onChange={event=>setType(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="TicketPrice"  placeholder="TicketPrice" value= {TicketPrice} onChange={event=>setPrice(event.target.value)}  /></TableCell>

    
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={Handleupdate}> update </Button>
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={handleClickOpen} color="secondary"> delete </Button>  
    


    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button id ={props.row._id} onClick={Handledelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>


      


    
    
    </TableRow>)

}