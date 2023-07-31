import React,{useState,useEffect, useRef} from "react";

let Assign5=()=>{
    
    let [text,setText] = useState('')
    let [comment,setComment] = useState('')
    let [timer,setTimer] = useState(60)
    let [letters,setLetters] = useState()
   
    let x = useRef();
    
    useEffect(()=>{

        if(timer===0) clearInterval(x.current)
       
        else{
            x.current= setInterval(() => {
                setTimer(pre=>pre-1)
               }, 1000);
            
        }

       return ()=>clearInterval(x.current)
    })

    let changeHandler=(e)=>{
        setText(e.target.value);
    }

    


    let submitHandler=()=>{

        setComment(text)

        setText('')

        setLetters(String(comment).length)

        clearInterval(x.current)

    }

    return(
        <div>
            <textarea cols="30" rows="10"  onChange={changeHandler} value={text}></textarea><br/>
            <button onClick={submitHandler}>Submit</button>
            <h1>{timer}</h1>
            <div>
                {comment}
                <h3>letters:{letters}</h3>
            </div>
        </div>
    )
}

export default Assign5;