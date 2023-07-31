import React, { useState } from "react";
import { UseSelector,useDispatch} from "react-redux";

let TodoRedux=()=>{

    // let x = useSelector((state)=>state.TodoReducer);
    let y=useDispatch()

//  let addHandler=()=>{
       
//     useDispatch({type:"ADD",payload:text})
 
// }

    let [text,setText] = useState('')
    
    return(
        <div style={{height:'500px'}} className="container border border-2 border-dark w-25 mt-3">
            <div className="row mt-3">
                <div className="col">
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                    <button onClick={addHandler}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default TodoRedux;