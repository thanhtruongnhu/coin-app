import { createSlice } from '@reduxjs/toolkit';

export const hoverthemeSlice = createSlice({
	name: 'hovertheme',
	initialState: {
		fontWeight: null,
		backgroundColor: null,
	},
	reducers: {
		dark: (state) => {
			state.fontWeight = 'bold';
			state.backgroundColor = '#606770';
		}, //Reducer 1 for login action
		light: (state) => {
			state.fontWeight = 'bold';
			state.backgroundColor = '#F2F2F2';
		}, //Reducer 2 for logout action
	},
});

export const { dark, light } = hoverthemeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// state: global store; .user(1): slice of info/ category;  .value(2): get a specific piece of user info
export const selectHovertheme = (state) => state.hovertheme;

export default hoverthemeSlice.reducer;
