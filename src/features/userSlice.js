import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// state: global store; .user(1): slice of info/ category;  .user(2): get a specific piece of user info
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
