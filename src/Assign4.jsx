// import React, { useState } from "react";

// let Assign4=()=>{

//     let [input,setInput] = useState('');
    
//     let [arr,setArr] = useState([])

//     let inputHandler=(e)=>{
//         setInput(e.target.value)
//     }
    
//     let clickHandler=()=>{
//         let obj={
//             id:new Date().getMilliseconds(),
//             text:input
//         }

//         setArr(pre=>{
//             return [...pre,obj];
//         })

//         setInput('')
//     }
    
//     let deleteHandler=(id)=>{
//         setArr(pre=>{
//             return pre.filter(elem=>{
//                 if(elem.id!==id) return elem
//             })
//         })
        
//     }
//     return(
//         <>
//             <input type="text" placeholder="Enter Text" onChange={inputHandler} value={input}/>
//             <button onClick={clickHandler}>Add</button>
//             <div>
//                { arr.map(elem=>{
//                     return <div className="d-flex mt-3">
//                         <h5>{elem.text}</h5>
//                         <button onClick={()=>deleteHandler(elem.id)}>Delete</button>
//                     </div>
                    
//                 })}
//             </div>
//         </>
//     )
// }

// export default Assign4;


import React,{useEffect, useReducer, useState} from 'react';
import reducer from './reducer/Assign4Reducer';

let initialState={

    arr:[],
    flag:false

}

let Assign4=()=>{
   
   let [text,dispatch] = useReducer(reducer,initialState);
   let [msg,setMsg] = useState('');

   useEffect(()=>{
    if(text.arr.length===0) dispatch({type:'UNDO'})
   },[text.arr])
   
    return(
         <div>
            <input type="text" placeholder="Enter Text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            <button onClick={()=>{dispatch({type:'ADD', payload:msg})
                                            setMsg('')}}>Add</button>
            <div>
                {
                    text.flag ? text.arr.map(elem=>{
                        return (
                            <div className='d-flex mt-3'>
                                <h5>{elem.message}</h5>
                                <button onClick={()=>dispatch({type:'DEL', payload:elem.id})}>Delete</button>
                            </div>
                        )
                    }):<h2 className='mt-3'>no data</h2>
                }
            </div>
         </div>
    )
}

export default Assign4;