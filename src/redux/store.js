import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    car: carReducer
});
const store = configureStore({
    reducer: rootReducer
});

export default store;