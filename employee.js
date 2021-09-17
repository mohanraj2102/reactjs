const initialState={
    employeeList:[],
    addList:[]
}

function Employee_Reducer(state=initialState,action){
    console.log('--=-=reducer==-==-');
    switch(action.type){
        
        case 'LIST_EMPLOYEE':
            return{
                ...state,
                employeeList:action.payload.data
            };
            break;
           
            case 'ADD_EMPLOYEE':
            return{
                ...state,
                addList:action.payload
            };
            break;
            default:return state;
    }
}
export default Employee_Reducer;