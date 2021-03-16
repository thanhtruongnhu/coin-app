import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
	name: 'balance',
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
		assign: (state, action) => {
			state.balance = action.payload;
		},
	},
});

export const { increment, decrement, assign } = balanceSlice.actions;

export const selectBalance = (state) => state.balance.balance;

export default balanceSlice.reducer;
