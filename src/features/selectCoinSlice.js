import { createSlice } from '@reduxjs/toolkit';

export const selectCoinSlice = createSlice({
	name: 'selectCoin',
	initialState: {
		value: null,
	},
	reducers: {
		assign: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { assign } = selectCoinSlice.actions;

export const selectSelectCoin = (state) => state.selectCoin.value;

export default selectCoinSlice.reducer;
