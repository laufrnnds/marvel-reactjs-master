import { combineReducers } from '@reduxjs/toolkit';

import comic from './comics/comicsSlice';

import characters from './characters/reducer';

import userSlice from './users/userSlice';

import books from './books/BooksSlice';

export const rootReducer = combineReducers({
  comic,
  characters,
  userSlice,
  books,
});
