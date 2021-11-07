import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import Button from '@material-ui/core/Button';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function Handledelete(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='http://localhost:8080/flight/delete/' + s
  axios.post(url)
  window.location.reload(false);
}
function Handleupdate(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='http://localhost:8080/flight/update/' + s

  axios.post(url)
  window.location.reload(false);

  }
function SearchResults({}) {


  
  
    const [userList,setUserList]= useState([]);
    useEffect(()=> {
    axios.get('http://localhost:3000/flight/searchresults')
    .then((res)=>{
      console.log(res.data);
      setUserList(res.data);
    })   
   },[]);
     return (
         
      <Paper>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell>FlightNumber</TableCell>
            <TableCell>DepartureTime</TableCell>
            <TableCell>To</TableCell>
            <TableCell>From</TableCell>
            <TableCell>ArrivalTime</TableCell>
            <TableCell>EconomySeats</TableCell>
            <TableCell>BusinessSeats</TableCell>
            <TableCell>ArrivalTerminal</TableCell>
            <TableCell>DepartureTerminal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(row => (
            <TableRow key={row._id}>
            <TableCell>{row.FlightNumber}</TableCell>
            <TableCell>{row.DepartureTime}</TableCell>
            <TableCell>{row.To}</TableCell>
            <TableCell>{row.From}</TableCell>
            <TableCell>{row.ArrivalTime}</TableCell>
            <TableCell>{row.EconomySeats}</TableCell>
            <TableCell>{row.BusinessSeats}</TableCell>
            <TableCell>{row.ArrivalTerminal}</TableCell>
            <TableCell>{row.DepartureTerminal}</TableCell>
            <Button variant="contained" id={row._id} type="submit"value='delete' onClick={Handleupdate}> update </Button>
            <Button variant="contained" id={row._id} type="submit"value='delete' onClick={Handledelete} color="primary"> delete </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
     ) 
         
         
         
     
 

}

export default SearchResults;