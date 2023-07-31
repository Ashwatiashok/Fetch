let initialState={

    text:'',
    arr:[]

}


let TodoReducer=(state = initialState,action)=>{

    switch(action.type){

        case 'ADD': 
            let obj={
                id:new Date().getMilliseconds(),
                message:action.payload
            }
            return {...state,arr:[...state.arr,obj]}
        
        default: return state;
    }
}

export default TodoReducer;