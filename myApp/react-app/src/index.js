import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Appuser from './compnents/userapp';
import App from"./App";
const handleClickUser = () => {ReactDOM.render(
  <React.StrictMode>
<Appuser />
</React.StrictMode> ,
    document.getElementById('root')
  );

};



const handleClickAdmin = () => {ReactDOM.render(
  <React.StrictMode>
<App />
</React.StrictMode> ,
    document.getElementById('root')
  );

};

ReactDOM.render(
<div>
    <Button variant="contained"  type="submit"value='User'  onClick= {handleClickUser} color="primary"> User </Button>
    <Button variant="contained"  type="submit"value='Admin'  onClick= {handleClickAdmin} color="secondary"> Admin </Button>
    
    </div> ,
  document.getElementById('root')
); 