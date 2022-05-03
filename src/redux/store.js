import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";

const rootReducer = combineReducers({
    user: userReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;