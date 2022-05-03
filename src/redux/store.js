import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countReducer from "./slices/counter.slice";

const rootReducer = combineReducers({
    count: countReducer
})

const store = configureStore({
    reducer: rootReducer
});

export default store;