import { combineReducers } from "redux";
import ProducerReducer from "@/store/reducer/product.reducer.ts";
const RootReducer = combineReducers({
  producer: ProducerReducer,
});
export default RootReducer;
