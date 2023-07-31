import React from "react";
import { useFetch } from "../context/Fetch";

let Modal=()=>{

    let{error} = useFetch();
    return(
        <div className="modal-section">
            <div className="popup">
                <div className="pop-section">
                        <h1>Input field</h1>
                        <p>{error.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;