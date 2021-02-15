import React from 'react';
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound.js';


  function App () {

  
  return(
    <>
    <Router>
    <div className="app">
    <Navbar />
      <div className="content" >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
      </div>    
    </div>
    </Router>
    </>
  )
}

export default App;
