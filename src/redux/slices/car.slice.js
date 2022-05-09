import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    formError: [],
    carForUpdate: null,
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car)
            return data
        } catch (e) {
            return rejectWithValue({formError: e.response.data})
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}) => {
        await carService.deleteById(id)
        return id
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}) => {
        await carService.updateById(id, car)
        return {id, car}
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [create.rejected]: (state, action) => {
            state.formError = action.payload.formError
        },
        [deleteById.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload)
            state.cars.splice(index, 1)
        },
        [updateById.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.cars,index, ...action.payload.car}
        }

    }
});

const {reducer: carReducer, actions:{setCarForUpdate}} = carSlice;
const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
}

export {
    carReducer,
    carActions,
}