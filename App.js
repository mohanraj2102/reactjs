import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Smallbox from './components/smallbox';
import List from "./components/list";
import Form from "./components/form";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
<Router>
  <div className="wrapper">
  
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Sidebar/>
    </aside>
      <Navbar/>
     
    <div className="content-wrapper">
    
      <section className="content">
        <div className="container-fluid">
          <Switch>
          <Route path="/smallbox" ><Smallbox/></Route>
          <Route path="/list" ><List/></Route>
          <Route path="/Form" ><Form/></Route>
          </Switch>
        </div>
        
      </section>
      
    </div>
    
    
    </div>
  </Router>
  );
}

export default App;
