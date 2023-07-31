import React, { useState } from 'react';
import {FaEdit} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai'

const Assign2=()=>{

    let [arr,setArr] = useState([]);
    let [input,setInput] = useState('');
    let [edit,setEdit] = useState('');

    let changeHandler=(e)=>{
        setInput(e.target.value)
    }

    let clickHandler=()=>{

        if(edit){
            setArr(pre=>{
                return pre.map(data=>{
                    if(data.id===id) data.text=input;
                    return data;
                })
            })
        }else{

        let obj={
            id:new Date().getMilliseconds(),
            text:input
        }

        setArr(pre=>{
            return [...pre,obj]
        })

        setInput('')
        }
    }   

    let  editHandler=(id)=>{
        let x=arr.find(data=>{
            return data.id===id
        })

        setEdit(x.id)
        setInput(x.text)
    }
    return(
        <div className='container w-50'>
            <div className='row'>
                <div className='col-7'>
                    <input type='text' placeholder='Enter text' onChange={changeHandler} value={input}/>
                </div>
                <div className='col-5'>
                    <button onClick={clickHandler}>{edit?<FaEdit/>:<AiOutlinePlus/>}</button>
                </div>
            </div>
            <div className='row'>
                {
                    arr.map(data=>{
                        return (
                            <div  className='d-flex mt-3'>
                                <h5>{data.text}</h5>
                                <button onClick={editHandler}>edit</button>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}

export default Assign2;