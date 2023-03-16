import { FETCH_FAILURE,FETCH_SUCESS,FETCH_REQUEST } from "./userTypes"
import axios from "axios"
export const fetchUser=()=>{
    return{
        type:FETCH_REQUEST
    }
}

const sucessful=(users)=>{
    return{
        type:FETCH_SUCESS,
        payload:users
    }

}

const fatchfail=(error)=>{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}

export const FetchtheUser=()=>{
    return(dispatch)=>{
        dispatch(fetchUser())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users=res.data
            dispatch(sucessful(users))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fatchfail(errorMsg))
        })

    }
}
