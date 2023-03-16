import { combineReducers } from "redux";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cakes/cakeReducer";
import UserReducer from "./user/userReducer";
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
    users:UserReducer,
})
export default rootReducer
