import { configureStore } from '@reduxjs/toolkit';
//import { authSlice } from './authSlice';
//import { journalSlice } from './jornualSlice'

export const store = configureStore({
	reducer: {
		//auth: authSlice.reducer,
		//journal: journalSlice.reducer
	},
});
