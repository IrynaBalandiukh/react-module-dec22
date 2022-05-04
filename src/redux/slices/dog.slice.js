import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null
}
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 0;
            const newDog = {id, name: action.payload.name}
            state.dogs.push(newDog);
        },
        deleteById: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(index, 1)
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        updateDog: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload.id);
            state.dogs[index].name = action.payload.name;
            state.dogForUpdate = false;
        }
    }
});

const {reducer: dogReducer, actions: {add, deleteById, setDogForUpdate, updateDog}} = dogSlice;

export default dogReducer;
export const dogActions = {
    add, deleteById, setDogForUpdate, updateDog
}