import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Login from './Components/LoginForm/Login';
import App from './App';

import BrandScape from './Components/Main/BrandScape';

function Routing() {
  return (
    <div>
    
    <Router>
       <Route   exact path='/' component={Login}/>
       <Route   exact path='/app' component={App}/>
       <Route   exact path='/brandscape' component={BrandScape}/>
       
    </Router>
    </div>
  );
}

export default Routing;
