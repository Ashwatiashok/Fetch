import React, { useState } from "react";
import { useFetch } from "../context/Fetch";

let Search=()=>{

    let {search} = useFetch()
    let [text,setText] = useState()

    let changeHandler=(e)=>{
        setText(e.target.value)
    }

    let btnHandler=()=>{
        search(text)
    }
    
    return(
        <>
            <input type="text" onChange={changeHandler} value={text} />
            <button onClick={btnHandler}>Search</button>
        </>
    )
}

export default Search;