import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Settings } from "./Settings";


const rootReducer:any = combineReducers({
    Configurations : Settings
});


export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)));