import React,{useEffect} from "react";
import { useFetch } from "../context/Fetch";
import Listview from "./Listview";
import Modal from "./Modal";


let Fetch=()=>{

    let {fetchData, loading,sortedData,listview,error} = useFetch()
    useEffect(()=>{
         fetchData('https://jsonplaceholder.typicode.com/posts')
    },[])
    
    // console.log(loading,error,data)
    return(
        <div className="container">
            <div className="row d-flex justify-content-center gap-2">
                {!sortedData.length && error && <Modal/>}
                {loading && <h1>Loading...</h1>}
               {!listview? (sortedData.map(data=>{
                    let {id,title,body} = data;
                    return(
                        <>
                            <div className="col-3">
                                <div className="card">
                                    <div className="card-header">{id}</div>
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <p>{body}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })):( <Listview/>)}
            </div>
        </div>
    )
}

export default Fetch;