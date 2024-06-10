import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CounterStateType = {
    value: number
}

const InitialState: CounterStateType = {
    value: 0
}

export const counter1Slice = createSlice({
    name: "Slice1",
    initialState: InitialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incByValue: (state, actions: PayloadAction<number>) => {
            state.value += actions.payload;
        },
        reset: (state) => {
            state.value = InitialState.value
        }
    }
})

export const {
    increment,
    reset,
    incByValue,
    decrement
} = counter1Slice.actions