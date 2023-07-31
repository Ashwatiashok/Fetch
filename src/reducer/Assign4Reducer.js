let reducer=(state,action)=>{

    switch(action.type){

        case 'ADD':
            let obj={
                id:new Date().getMilliseconds(), 
                message:action.payload
                }
         
            return {...state, arr:[...state.arr,obj], flag:true}
        
        case 'DEL':
            let x = state.arr.filter(elem=>{
                return elem.id !== action.payload
            })

            return {...state, arr:x}

        case 'UNDO':
            return {...state, flag:false}
            
        default :
            return state;
    }
}

export default reducer;