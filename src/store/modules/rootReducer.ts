import { combineReducers } from '@reduxjs/toolkit';

import comic from './comics/comicsSlice';
import characters from './characters/reducer';
import books from './books/BooksSlice';

export default combineReducers({
  comic,
  characters,
  books,
});
