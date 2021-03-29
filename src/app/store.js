import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import tickerReducer from '../features/tickerSlice';
import balanceReducer from '../features/balanceSlice';
import hoverthemeReducer from '../features/hoverthemeSlice';
import coinReducer from '../features/allCoinSlice';
export default configureStore({
	reducer: {
		user: userReducer,
		ticker: tickerReducer,
		balance: balanceReducer,
		hovertheme: hoverthemeReducer,
		coin: coinReducer,
	},
});
