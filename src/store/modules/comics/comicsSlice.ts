import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    createComic(state, action) {
      return action.payload;
    },
    clearComic() {
      return initialState;
    },
  },
});

export const { createComic, clearComic } = comicSlice.actions;
export default comicSlice.reducer;
