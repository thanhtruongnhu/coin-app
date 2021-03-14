import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
    name: 'counter',
    initialState: {
        balance: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.balance += action.payload;
        },
        decrement: (state, action) => {
            state.balance -= action.payload;
        },
    },
});

export const { increment, decrement } = balanceSlice.actions;

export const selectBalance = (state) => state.ticker.balance;

export default balanceSlice.reducer;
