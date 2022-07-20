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

const booksSlice = createSlice({
  name: 'books',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    // addOneSemAdapter(state, action): any {
    //   const { bookId } = action.payload;
    //   const exist = state.find((item: Book) => item.bookId === bookId);

    //   if (!exist) {
    //     return [...state, action.payload];
    //   }

    //   return state;
    // },
  },
});

export const { addOne, addMany, updateOne } = booksSlice.actions;
export default booksSlice.reducer;
