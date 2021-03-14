import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: "user",
	initialState: {
		name: 'Kyle',
		email: 'thanhtruong.kyle@gmail.com'
	},
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		}, //Reducer 1 for login action
		logout: (state) => {
			state.value = null;
		}, //Reducer 2 for logout action
	},
});

export const { login, logout } = userSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// state: global store; .user(1): slice of info/ category;  .value(2): get a specific piece of user info
export const selectUser = (state) => state.user;

export default userSlice.reducer;
