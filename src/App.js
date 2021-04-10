import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
// import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
       <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
