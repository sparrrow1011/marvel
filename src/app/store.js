import { configureStore } from '@reduxjs/toolkit';
import comicReducer from '../features/marvel/marvelSlice'

export const store = configureStore({
  reducer: {
    comics: comicReducer,
  },
});
