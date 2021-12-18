import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Appuser from './compnents/userapp';
import App from"./App";
import Registapp from './compnents/Registapp';

// const handleClickUser = () => {ReactDOM.render(
//   <React.StrictMode>
// <Appuser />
// </React.StrictMode> ,
//     document.getElementById('root')
//   );

// };



// const handleClickAdmin = () => {ReactDOM.render(
//   <React.StrictMode>
// <App />
// </React.StrictMode> ,
//     document.getElementById('root')
//   );

// };

ReactDOM.render(
<React.StrictMode>
<Registapp />
 </React.StrictMode>,
  document.getElementById('root')
); 