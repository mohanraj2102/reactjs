import React from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {AC_LIST_EMPLOYEE,AC_ADD_EMPLOYEE} from './Actions/employee';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            salary:"",
            nameError:false,
            ageError:false,
            agevalError:false,
            salaryError:false,
            salaryValError:false,
            nameValError:false,
            border:'',
            value:''

        }
        this.valid=this.valid.bind(this);
        this.handle=this.handle.bind(this);
        this.numval=this.numval.bind(this);
    }
    valid(){
        console.log('-=-=valid-=-=-');
        const Name=this.state.name;
        const Age=this.state.age;
        const Salary=this.state.salary;
        

        if(Name){
            this.setState({nameError:false});
        }
        else{
            this.setState({nameError:true});
        }
        if(Age){
            this.setState({ageError:false});
            
        }
        else{
            this.setState({ageError:true});
        }
        if(Salary){
            this.setState({salaryError:false});
        }
        else{
            this.setState({salaryError:true});
        }
        var formData={
            name:this.state.name,
            age:this.state.age,
            salary:this.state.salary

        }
        this.props.AC_ADD_EMPLOYEE(formData)
    }
    numval(e){
        const re = /^[0-9\b]+$/;
    
        // if value is not blank, then test the regex
    
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({value: e.target.value})
        }
    }
    handle(event){
        const nameid = event.target.id;
        const namevalue=event.target.value;
        const Agenumber = /\-?\d*\.?\d{1,2}/;
        const Age=this.state.age;
        const salarynumber = /\-?\d*\.?\d{1,2}/;
        const Salary=this.state.salary;
        if(nameid =="name"){
            if(namevalue){
                console.log('=-=-=name-=-=',namevalue);
         this.setState({name:namevalue,nameError:false})
            
          if(namevalue.length > 4 ){
            this.setState({nameValError:false,border:''})
            console.log('=-=-=jhju',namevalue.length);
          }
         
          else{
            this.setState({nameValError:true,border:'red'})
            console.log('=iudiudio',this.state.nameValError);
          }
        }
        }
        
        if(nameid=="age"){
            this.setState({age:namevalue,ageError:false})
            if(Agenumber.test(Age)){
                this.setState({ageValError:false})
            }
            else{
                this.setState({ageValError:true})
            }
        }
        
        if(nameid=="salary"){
            this.setState({salary:namevalue,salaryError:false})
            if(salarynumber.test(Salary)){
                this.setState({salaryValError:false})
            }
            else{
                this.setState({salaryValError:true})
            }
        }
        



    }
    render(){
        
        return(
        <div>
            <div>
                <h1 style={{}}>EMPLOYEES DETAILS</h1>
            </div>
        <form style={{marginTop:"20px",marginLeft:"30px"}} autoComplete="off">
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="email" class="form-control" style={{width:"300px",borderColor:this.state.borders}} id="name"  placeholder="Enter Name of Employee" onChange={this.handle}/>
            {this.state.nameError?<label style={{color:"red"}}>Name required</label>:""}
            {this.state.nameValError?<label style={{color:"red"}}>Name should more than 3 characters</label>:""}
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Age</label>
            <input type="text" class="form-control" id="age"  value={this.state.age} style={{width:"300px"}} placeholder="Enter Age of Employee" onChange={this.handle}/>
            {this.state.ageError?<label style={{color:"red"}}>Age is required</label>:""}
            {this.state.ageValError?<label style={{color:"red"}}>Age Should in number</label>:""}
        </div>
        <div class="form-group">
            <label for="inputAddress2">Salary</label>
            <input type="text" class="form-control" id="salary" value={this.state.salary} style={{width:"300px"}} placeholder="Enter Salary of Employee" onChange={this.handle}/>
            {this.state.salaryError?<label style={{color:"red"}}>salary is required</label>:""}
            {this.state.salaryValError?<label style={{color:"red"}}>salary Should in number</label>:""}
        </div>
        
        <input type="button" class="btn btn-primary" value="Add" onClick={this.valid}/>
        </form>
        </div>
        );
    }
}

function mapStateToProps(state){
    console.log('-=-=mohan=-==-',state);
    
    return{
        EmployeeReducer:state.Employee_Reducer
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({AC_LIST_EMPLOYEE,AC_ADD_EMPLOYEE},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
