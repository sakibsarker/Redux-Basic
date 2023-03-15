import { combineReducers } from "redux";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cakes/cakeReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
})
export default rootReducer