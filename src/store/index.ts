import { createStore, applyMiddleware } from "redux";
import RootReducer from "@/store/rootReducer.ts";
import thunk from "redux-thunk";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logger from "redux-logger";

const Store = createStore(RootReducer, applyMiddleware(thunk, logger));
export default Store;
