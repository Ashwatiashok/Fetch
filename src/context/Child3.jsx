import React from "react";
import { userContext } from "./Context1";
import { useContext } from "react";

let Child3=()=>{
    let x = useContext(userContext);
    return(
        <>
            <h2>This is Child of Child1 - {x}</h2>
        </>
    )
}

export default Child3;
