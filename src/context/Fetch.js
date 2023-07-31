import React,{createContext, useContext, useReducer} from "react";
import reducer from '../reducer/FetchReducer'

export let fetchContext=createContext();

let initialState={
    loading:false,
    data:[],
    error:'',
    sortedData:[],
    listView:true
}

let FetchContext=({children})=>{

    let fetchData=(url)=>{
        fetch(url).then(data=>{
            dispatch({type:'LOADING'})
            return data.json()
        }).then(item=>{
            dispatch({type:'FETCHED', payload:item});
            console.log(item)
        }).catch(err=>{
            dispatch({type:'ERROR', payload:err})
            console.log(err)
        })
    }

    let increment=(value)=>{
       return dispatch({type:value, payload:value})
        // console.log('hi')
    }

    let search=(value)=>{
        dispatch({type:'SEARCH',payload:value})
    }

    let listHandler=()=>{
        return dispatch({type:'LIST'})
    }

    let gridHandler=()=>{
        return dispatch({type:'GRID'})
    }

    let [state,dispatch] = useReducer(reducer,initialState)

    return(
        <fetchContext.Provider value={{...state,fetchData,increment,search,listHandler,gridHandler}}>
            {children}
        </fetchContext.Provider>
    )

}

export let useFetch=()=>{
    return useContext(fetchContext)
}

export default FetchContext;