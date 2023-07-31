import React from "react";
import { useFetch } from "../context/Fetch";

let Select=()=>{

    let{increment} = useFetch()

    let selectHandler=(e)=>{
        increment(e.target.value)
        // console.log('hi')
    }
    return(
        <div>
            <select onClick={selectHandler}>
                <option value="1-10">1-10</option>
                <option value="10-1">10-1</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )
}

export default Select;