import React from "react";
import { useFetch } from "../context/Fetch";
import {BsList,BsFillGridFill} from 'react-icons/bs'

let Icons=()=>{

    let {listHandler,gridHandler,listview} = useFetch();

    let obj={
        backgroundColor:'red',
        color:'white'
    }
    
    return(
        <div className="d-flex justify-content-end">
            <button onClick={gridHandler}><BsFillGridFill style={listview?obj:null}/></button>
            <button onClick={listHandler}><BsList style={listview?null:obj}/></button>
        </div>
    )
}

export default Icons;