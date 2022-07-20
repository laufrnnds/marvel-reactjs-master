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
  const booksStateOriginal = useSelector((state: any) => state.books);

  useEffect(() => {
    const book: Book = {
      bookId: 1,
      title: 'Meu livro',
    };
    // dispatch(addOne({ bookId: 1, title: 'Meu livro' }));
    dispatch(addOne(book));
    dispatch(addOne({ bookId: 2, title: 'Meu livro 2' }));
    dispatch(addOne({ bookId: 2, title: 'Meu livro 2' }));

    const books: Book[] = [
      { bookId: 2, title: 'Meu livro 2' },
      { bookId: 1, title: 'Meu livro 1' },
      { bookId: 3, title: 'Meu livro 3' },
      { bookId: 4, title: 'Meu livro 4' },
    ];

    dispatch(addMany(books));

    dispatch(
      addMany([
        { bookId: 2, title: 'Meu livro 2' },
        { bookId: 1, title: 'Meu livro 1' },
        { bookId: 3, title: 'Meu livro 3' },
        { bookId: 4, title: 'Meu livro 4' },
      ])
    );

    dispatch(updateOne({ id: 2, changes: { title: 'Meu livro EDITADO' } }));
  }, []);

  useEffect(() => {
    console.log(booksRedux);

    console.log(booksStateOriginal);
  }, [booksRedux, booksStateOriginal]);

  return <h1>Growdev</h1>;
};

export default Books;
