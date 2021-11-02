import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {

  return( 
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
