import React,{useEffect, useState} from "react";

const UseEffect=()=>{
    
    let [count,setCount] = useState(0)
    
    let x;

    useEffect(()=>{
        
        x = setInterval(() => {
            console.log('setinterval executed')
            setCount(count+1);
        }, 2000);


        return ()=>{
            console.log('unmount phase')
            clearInterval(x)
        }
    },[count])
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffect;