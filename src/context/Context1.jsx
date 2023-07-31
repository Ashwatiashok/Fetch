import React,{ createContext } from "react";
import Child3 from "./Child3";

export let userContext = createContext();

let Context1=()=>{

    return (
        
        <userContext.Provider value='hello'>
            <Child3/>
        </userContext.Provider>
    )
}

export default Context1;