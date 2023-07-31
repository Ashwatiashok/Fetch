import React,{useReducer} from "react";


const initialState = {
    firstState:0
}

    let reducer=(state,action)=>{
        switch(action.type){
            case 'inc':
                return {firstState:state.firstState+1};
            case 'dec':
                return {firstState:state.firstState-1};
            default:
                return state.firstState;
        }

    } 

const Reducer=()=>{
    
    let [count,dispatch] = useReducer(reducer,initialState)
    
    return (
        <div>
            <h1>{count.firstState}</h1>
            <button onClick={()=>dispatch({type:'inc'})}>Inc</button>
            <button onClick={()=>dispatch({type:'dec'})}>Dec</button>
        </div>
    )
}

export default Reducer;