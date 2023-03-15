import { BUY_ICRCREAM } from "./iceCreamType";

const initialState={
    numOfIceCream:20
}

const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICRCREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state
    }

}

export default IceCreamReducer