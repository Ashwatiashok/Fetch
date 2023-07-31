import React, { useEffect, useRef, useState } from 'react';

let Assign3=()=>{
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
    let [color,setColor] = useState(0);
    let x;
    let counter=useRef(0)
    let startHandler=()=>{
        
    }

    let stopHandler=()=>{

    }

    useEffect(()=>{
        x=setInterval(()=>{
            let r=Math.random()*100
            let res=Math.trunc(r)
            setColor(res)
            if(counter.current<12) counter.current=counter.current+1;
            else counter.current=0
            console.log('counter value', counter)
        },1000)
    },[])

    return (
        <>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>
                <button onClick={startHandler}>START</button>
                <button onClick={stopHandler}>STOP</button>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                {
                    arr.map((elem,index)=>{
                        return (
                            <div style={{height:'150px',width:'150px',border:'1px solid black', backgroundColor:counter.current===index?`rgb(${color*10},${color*20},${color+150})`:null}}> 

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Assign3;