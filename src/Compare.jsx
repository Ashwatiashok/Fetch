import React,{useState,useRef} from "react";

const Compare=()=>{
    
    let x = 0;
    let [z,setZ] = useState(0);
    let y = useRef(0)

    let incHandler=()=>{
        x=x+1;
        setZ(z+1);
        y.current=y.current+1
        console.log(x,y.current,z)
    }
    // console.log(z)

    
    return(
        <div>
            <h3>var:{x} ref:{y.current} state:{z}</h3>
            <button onClick={incHandler}>increment</button>
            
        </div>
    )


    // let count=useRef(0);

    // function abc(){
    //     count.current=count.current+1;
    //     console.log(count.current)
    // }
    // return(
    //     <div>
    //         <h1>{count.current}</h1>
    //         <button onClick={abc}>inc</button>
    //     </div>
    // )
}

export default Compare;