import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface Book {
  bookId: number;
  title: string;
}

const adapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.books
);

const bookSlice = createSlice({
  name: 'books',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = bookSlice.actions;

export default bookSlice.reducer;
