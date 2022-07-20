import React, { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/modules/users/types-hooks';
import { fetchUsers } from '../../store/modules/users/userSlice';

const User: React.FC = () => {
  const users = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2>Lista de usuários</h2>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div>Erro: {users.error} </div> : null}
      {users.users.length > 0 && (
        <ul>
          {users.users.map((dado) => (
            <li key={dado.id}>{dado.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default User;
