import { FETCH_SUCESS,FETCH_FAILURE,FETCH_REQUEST } from "./userTypes"
const initialState={
    loading:false,
    users:[],
    error:''
}

const UserReducer=(state=initialState,action)=>{
    switch(action.type){ 
        case FETCH_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FETCH_SUCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
       
       
        default: return state;
    }

}

export default UserReducer