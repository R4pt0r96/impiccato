import { configureStore } from '@reduxjs/toolkit';
import reduxSlice from './reduxSlice';

export const store = configureStore({
  reducer: { store: reduxSlice },
});
