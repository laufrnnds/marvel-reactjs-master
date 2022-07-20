/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// const initialState = '';

// const comicSlice = createSlice({
//   name: 'comic',
//   initialState,
//   reducers: {
//     createComic(state, action) {
//       return action.payload;
//     },
//     clearComic() {
//       return initialState;
//     },
//   },
// });

export type Comics = {
  id: string;
  name: string;
  imgPath: string;
};

type initialState = {
  loading: boolean;
  comics: Comics[];
  error: '';
};

const initialState: initialState = {
  loading: false,
  comics: [],
  error: '',
};

const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    requestComic(state) {
      state.loading = true;
    },
    createComic(state, action) {
      state.loading = false;
      state.comics = action.payload;
      state.error = '';
    },
    requestComicError(state, action) {
      state.loading = false;
      state.comics = [];
      state.error = action.payload;
    },
    clearComic() {
      return initialState;
    },
  },
});

// export const { createComic, clearComic } = comicSlice.actions;
export const { createComic, clearComic, requestComic, requestComicError } =
  comicSlice.actions;
export default comicSlice.reducer;
