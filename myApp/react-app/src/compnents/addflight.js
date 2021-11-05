import React from "react";
import axios from "axios";

function Addflight() {
//   const {FN,DT, AT,ES,BS,A }= React.useState({
//     Flight_number : '',
//     DepartureTime : '',
//     ArrivalTime : '',
//     EconomySeats : '',
//     BusinessSeats : '',
//     Airport : ''
// });

// function HandleClick(event){
//     console.log(FN,DT, AT,ES,BS,A );
//   axios({
//     method : 'post',
//     url: '/Addflight',
//     data:{
//       Flightnumber: FN,
//       DepartureTime: DT, 
//       ArrivalTime: AT,
//       EconomySeats: ES,
//       BusinessSeats : BS,
//       Airport: A

//     }
//   })
//     axios.post('/Addflight',{
//       Flightnumber: FN,
//       DepartureTime: DT, 
//       ArrivalTime: AT,
//       EconomySeats: ES,
//       BusinessSeats : BS,
//       Airport: A



//     }).then((response)=>{
//       console.log(response);
//     },(error)=>{
//       console.log(error)
//     });

//   }
//   function HandleChange(event) {
//     console.log(FN);
//     const {value}=event.target.value;
//     this.e
//     // setinput (prevInput=>{
//     //   return{
//     //     ...prevInput ,
//     //     [name]: value 
//     //   }
//     // })
//   }
axios.get('http://localhost:8080/flight/Addflight')

  return (
    
        <div className="Addflight">
        <header className="Addflight-header">
            
            
    <h1>Add your flight details</h1>
    
    <label>
    Flight number:
    <input  type="text" name="Flight_number"  placeholder="Flight_number"  />
  </label>
  <br/>
  <label>
  DepartureTime:
    <input   type="text" name="DepartureTime" placeholder="DepartureTime"  />
  </label>
  <br/>
  <label>
  ArrivalTime
    <input   type="text" name="ArrivalTime" placeholder="ArrivalTime"  />
  </label>
  <br/>
  <label>
  EconomySeats:
    <input   type="text" name="EconomySeats" placeholder="EconomySeats"  />
  </label>
  <br/>
    <label>
    BusinessSeats:
    <input   type="text" name="BusinessSeats" placeholder="BusinessSeats"  />
  </label>
  <br/>
  <label>
  Airport:
    <input  type="text" name="Airport" placeholder="Airport"  />
  </label>
             <form action="/flight/Addflight" method="post"
                className="form">
            <button type="submit">submit</button>
            </form> 
                   </header>
        </div>
    );
    }
    
    export default Addflight;
    