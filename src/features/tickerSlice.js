import { createSlice } from '@reduxjs/toolkit';

export const tickerSlice = createSlice({
	name: "ticker",
	initialState: {
		value: [],
	},
	reducers: {
		update: (state, action) => {
			state.value = action.payload;
		}, 
	},
});

export const { update } = tickerSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// state: global store; .user(1): slice of info/ category;  .value(2): get a specific piece of user info
export const selectTicker = (state) => state.ticker.value;

export default tickerSlice.reducer;
