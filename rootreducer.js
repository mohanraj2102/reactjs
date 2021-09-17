import {combineReducers} from 'redux';
import Employee_Reducer from './components/Reducer/employee';
const rootReducer=combineReducers({
    
    Employee_Reducer,
})
console.log('--=-=rootreducer==-==-');

export default rootReducer;