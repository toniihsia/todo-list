import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "../reducers/root_reducer";
import masterMiddleware from "../middleware/master_middleware";

const configureStore = (state = {}) => (createStore(rootReducer, state, masterMiddleware));

export default configureStore;
