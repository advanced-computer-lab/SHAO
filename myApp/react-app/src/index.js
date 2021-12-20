import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Appuser from './compnents/userapp';
import App from"./App";
import Registapp from './compnents/Registapp';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./Reducers";
const store = createStore(rootReducer,composeWithDevTools());

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
<Provider store={store}>
    <Registapp />
    </Provider>
 </React.StrictMode>,
  document.getElementById('root')
); 