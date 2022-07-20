/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOne,
  addMany,
  Book,
  updateOne,
  selectAll,
} from '../../store/modules/books/BooksSlice';

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const booksRedux = useSelector(selectAll);

  useEffect(() => {
    const book: Book = {
      bookId: 1,
      title: 'Meu Livro',
    };

    dispatch(addOne(book));
    dispatch(addOne({ bookId: 2, title: 'MEU LIVRO 2' }));

    const books: Book[] = [
      { bookId: 1, title: 'MEU LIVRO 1' },
      { bookId: 2, title: 'MEU LIVRO 2' },
      { bookId: 3, title: 'MEU LIVRO 3' },
      { bookId: 4, title: 'MEU LIVRO 4' },
    ];

    dispatch(addMany(books));

    dispatch(
      addMany([
        { bookId: 1, title: 'MEU LIVRO 1' },
        { bookId: 2, title: 'MEU LIVRO 2' },
        { bookId: 3, title: 'MEU LIVRO 3' },
        { bookId: 4, title: 'MEU LIVRO 4' },
      ])
    );

    dispatch(updateOne({ id: 2, changes: { title: 'MEU LIVRO EDITADO' } }));
  }, []);

  useEffect(() => {
    console.log(booksRedux);
  }, [booksRedux]);

  return (
    <>
      <h1>Growdev</h1>
      <p>oioioi</p>
    </>
  );
};

export default Books;
