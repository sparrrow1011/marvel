import { configureStore } from '@reduxjs/toolkit';
import comicReducer from '../features/marvel/comicSlice'

export const store = configureStore({
  reducer: {
    comics: comicReducer,
  },
});
