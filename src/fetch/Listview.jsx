import React from "react";
import { useFetch } from "../context/Fetch";

let Listview=()=>{

    let {sortedData} = useFetch()
    return(
        <div className="container">
            <div className="row">
                {
                    sortedData.map(data=>{
                        let {id,title,body} = data;
                        return(
                            <div className="col-12">
                                <div className="card">
                                    <h5>{id} {title}</h5>
                                </div>
                                <div className="card-body">
                                    {body}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Listview;