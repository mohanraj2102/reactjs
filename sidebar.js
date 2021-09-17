import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Sidebar extends React.Component{
    render(){
        return(
    // main sidebar
            
<>
    <a href="index3.html" className="brand-link">
        <img src="/dist/img/m3_logo.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity:".8"}}/>
            <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
            
    <div className="sidebar">
      
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/dist/img/mohan.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block" style={{fontFamily:"Humnst777 Blk BT",fontWeight:"800",color:"white"}}>@_Mohanraj</a>
        </div>
      </div>

      
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item menu-open">
            <Link  className="nav-link active" to="/smallbox">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </Link>
            
             </li>
         
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Employees
                <i className="fas fa-angle-left right"></i>
                
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link  className="nav-link" to="/list">
                  List Employees
                  <span className="badge badge-info right">6</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Add Employee
                </Link>
              </li>
             
              
             
              
              
            </ul>
          </li>
          
         </ul>
          
      </nav>
    
    </div>
    </>
  
        );
    }
}
export default Sidebar;