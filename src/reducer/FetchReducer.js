let FetchReducer=(state,action)=>{
    switch(action.type){

        case 'LOADING':
            return {...state, loading:true}

        case 'FETCHED':
            return {...state, data:action.payload, loading:false, sortedData:action.payload}

        case 'ERROR':
            return {...state, error:action.payload, loading:false}

        case "1-10":
            return {...state,sortedData:[...state.sortedData].sort((a,b)=>{
                return a.id-b.id;
            })}

        case "10-1":
            return {...state,sortedData:[...state.sortedData].sort((a,b)=>{
                return b.id-a.id;
            })}

        case "A-Z":
            return {...state,sortedData:[...state.data].sort((a,b)=>{
                return a.title.localeCompare(b.title)
            })}

        case "Z-A":
            return {...state,sortedData:[...state.data].sort((a,b)=>{
                return b.title.localeCompare(a.title);
            })}

        case 'SEARCH':
            return {...state,sortedData:[...state.data].filter(data=>{
                return data.title.includes(action.payload)
            })}

        case 'LIST':
            return {...state,listview:false}

        case 'GRID':
            return {...state,listview:true}

        default : return state
    }
}

export default FetchReducer;