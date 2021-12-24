import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { responsiveFontSizes, TextField } from "@material-ui/core";
import {useSelector} from "react-redux";
import {createStore} from 'redux';
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();





function Showresflights({}) {

  
  const {auth} =useSelector((state)=>({...state}));
  const Handlecreserve=(event)=>{
  
    var s=String(auth.user._id);
    console.log(s);
    axios.post('http://localhost:8080/user/cancelreserve/' + s,{
      id: event.currentTarget.id
    })
    window.location.reload(false);
    
  }

  
    const [userList,setUserList]= useState([]);
    useEffect(()=> {
      var x=String(auth.user._id);
    axios.get('http://localhost:8080/user/Showresflights/'+x)
    .then((res)=>{
      console.log(res.data);
      setUserList(res.data);
    })   
   },[]);
     return (
         
      <Paper>
      <Table sx={{ maxWidth: 100 }} >
        <TableHead >
          <TableRow>
            <TableCell>FlightNumber</TableCell>
            <TableCell>DepartureTime</TableCell>
            <TableCell>To</TableCell>
            <TableCell>From</TableCell>
            <TableCell>ArrivalTime</TableCell>
            <TableCell>ArrivalTerminal</TableCell>
            <TableCell>DepartureTerminal</TableCell>
            <TableCell>BaggageAllowance</TableCell>
            <TableCell>Flight Type</TableCell>
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
         
         
         
     
 

}

export default Showresflights;
function Row(props){
  const {auth} =useSelector((state)=>({...state}));
  const Handlecreserve=(event)=>{
  
    var s=String(auth.user._id);
    console.log(s);
    axios.post('http://localhost:8080/user/cancelreserve/' + s,{
      id: event.currentTarget.id
    })
    window.location.reload(false);
    
  }
  const [openC, setOpenC] = React.useState(false);

  const handleClickOpenC = () => {
    setOpenC(true);
  };

  const handleCloseC = () => {
    setOpenC(false);
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

   useEffect(() => {setfn(props.row.Flight.FlightNumber);
    setDT(props.row.Flight.DepartureTime);
    setto(props.row.Flight.To);
    setFrom(props.row.Flight.From);
    setat(props.row.Flight.ArrivalTime);
    setF(props.row.Flight.First);
    setE(props.row.Flight.EconomySeats);
    setB(props.row.Flight.BusinessSeats);
    setater(props.row.Flight.ArrivalTerminal);
    setDter(props.row.Flight.DepartureTerminal);
    setBag(props.row.Flight.BaggageAllowance);
    setType(props.row.Flight.Type);
    setPrice(props.row.Flight.TicketPrice);
    


  },[])


//start pay


  

  const [product] = React.useState({
      name: 'Flight No: ' + props.row.Flight.FlightNumber,
      price: props.row.Flight.TicketPrice,

  });

async function handleToken(token, addresses) {
 const response = await axios.post("http://localhost:8080/user/checkout",{
      token,
      product
  });
const {status} = response.data
if(status === 'success')
{
  toast('Success! Check email for details',
  {icon: "✅"})
}
else
{
  toast("Something went wrong",
  { icon: "❌"});
}
  console.log({token, addresses});
}




      


  







//endpay




  return(<TableRow key={props.row._id}>
    <TableCell><TextField variant="standard"  type="text" name="Flight_number"  placeholder="Flight_number" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><TextField variant="standard"   type="text" name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </TableCell>
    <TableCell><TextField variant="standard"   type="text" name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>
   <TableCell><TextField variant="standard"  type="text" name="ArrivalTerminal"  placeholder="ArrivalTerminal" value={ArrivalTerminal} onChange={event=>setater(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="DepartureTerminal"  placeholder="DepartureTerminal" value= {DepartureTerminal} onChange={event=>setDter(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="BaggageAllowance"  placeholder="BaggageAllowance" value= {BaggageAllowance} onChange={event=>setBag(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="Flight Type"  placeholder="Flight Type" value= {Type} onChange={event=>setType(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="TicketPrice"  placeholder="TicketPrice" value= {TicketPrice} onChange={event=>setPrice(event.target.value)}  /></TableCell>
    {/* <Button variant="contained" id={props.row._id} type="submit"value='pay' onClick={handleToken} color="primary"> Payment </Button>   */}
    
    <StripeCheckout 
            stripeKey="pk_test_51KABeOLJRcHi1IfiAVGgjn5RmuDKAPsthHXJg5MVaKssRDJjcjrTNJUIir2IcYxxMJfdQRP9MzZSmKm8MYm7G4a400DgM97QBf"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}
            name={product.name}


            />
    
    <Button variant="contained" id={props.row._id} type="submit"value='cancelreserve' onClick={handleClickOpenC} color="secondary"> Cancel reservation </Button>  

      
    <Dialog
        open={openC}
        onClose={handleCloseC}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cancel flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to cancel reservation of this flight?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseC}>No</Button>
          <Button id ={props.row._id} onClick={Handlecreserve} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>




    </TableRow>)

}