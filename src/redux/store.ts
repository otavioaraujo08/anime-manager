import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './features/nameSlice';

export const store = configureStore({
    reducer: {
        renamer: nameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
