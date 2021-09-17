import React from 'react';
import { AC_LIST_EMPLOYEE } from './Actions/employee';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
class List extends React.Component{
    
    render(){
        var Emplist = this.props.EmployeeReducer.employeeList;
        var List=[];
        if(Emplist){
            for(var i=0;i<Emplist.length;i++){
                List.push(<tr key={i}>
                            <td>{Emplist[i].id}</td>
                            <td>{Emplist[i].name}</td>
                            <td>{Emplist[i].year}</td>
                        </tr>)
            }
        }
        
        return(
            <table class="table table-striped table-dark">
            <thead>
              <tr>
                
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">YEAR</th>
              </tr>
            </thead>
            <tbody>
              {List}
            </tbody>
          </table>
           
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(List);
