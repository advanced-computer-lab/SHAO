import React from "react";
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import { Spoiler } from 'react-spoiler-tag'
import 'react-spoiler-tag/dist/index.css'
 
function Help() {

    const SomeComponent = () => {
        return <Spoiler text='Super secret spoiler!' />
      }

    const myStyle={
        backgroundImage: 
      "url('https://pngimg.com/uploads/plane/plane_PNG101234.png')",
        height:'57vh',
        marginTop:'180px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: '150px',
      };

  return (
    <div className= "Profile" >
  
  {/* style={{ color: '#3f51b5'}} */}

<br/>
  <h3 style={{ color: '#3f51b5'}}>
Most Common Questions
      </h3>

      <br/>  

      <h6 href='' style={{ color: 'black'}}>
Is it safe to fly during this time of COVID-19?
  </h6>


  <br/>

  <h6 href='' style={{ color: 'black'}}>
What is Spirit doing to address concerns about COVID-19 coronavirus?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
How much does Spirit charge for bags?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
What are the size and weight limits for bags?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
How can I change or cancel my reservation?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
How can I check in and get my boarding pass?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
  Do I have to purchase a seat assignment?
  </h6>
  <br/>

  <h6 href='' style={{ color: 'black'}}>
  COVID-19 Frequently Asked Questions
  </h6>


  <div style={myStyle}>
        
        </div>
    
</div>
  )
}
export default Help;