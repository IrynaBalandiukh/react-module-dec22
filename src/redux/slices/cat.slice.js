import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null
}
const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 0;
            const newCat = {id, name: action.payload.name};
            state.cats.push(newCat);
        },
        deleteById: (state, action) => {
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
        },
        setCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.cat
        },
        updateCat: (state, action) => {
            const index = state.cats.findIndex(cat => cat.id === action.payload.id);
            state.cats[index].name = action.payload.name;
            state.catForUpdate = false;
        }
    }
});

const {reducer:catReducer, actions: {add, deleteById, setCatForUpdate, updateCat}} = catSlice;

export default catReducer;

export const catActions = {
    add, deleteById, setCatForUpdate, updateCat
}