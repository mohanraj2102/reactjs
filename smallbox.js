import React from 'react';
import { AC_LIST_EMPLOYEE } from './Actions/employee';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
class Smallbox extends React.Component{
  componentDidMount(){
    this.props.listEmployee();
  }
    render(){
      var EmployeeCount=0;
      var Emplist = this.props.EmployeeReducer.employeeList;
      EmployeeCount = Emplist.length;
        return(
<>
          {/* // Headerdash */}
          <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>  
            </div>  
          </div>     
        </div>
          {/* // Headerdash_end */}
            <div className="row">

            <div className="col-lg-3 col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{EmployeeCount}</h3>
  
                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>
            {/* <!-- ./col --> */}

            <div className="col-lg-3 col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53<sup style={{fontSize:"20px"}}>%</sup></h3>
  
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>

            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
  
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>

            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
  
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>

            {/* <!-- ./col --> */}
          </div>
        
          
          </>
        );
    }
}

function mapStateToProps(state){
    
  return{
      EmployeeReducer:state.Employee_Reducer
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({listEmployee:AC_LIST_EMPLOYEE},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Smallbox);
