import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formError: []
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const createAsync = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formError: e.response.data})
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car);
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formError} = action.payload;
                state.status = status;
                state.formError = formError
            })
    })
    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'completed'
    //         state.cars = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'rejected'
    //     },
    //     [createAsync.rejected]: (state, action) => {
    //         const {status, formError} = action.payload;
    //         state.status=status;
    //         state.formError = formError
    //     }
    // }
});

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll,
    createAsync
};

export {
    carReducer,
    carActions
}