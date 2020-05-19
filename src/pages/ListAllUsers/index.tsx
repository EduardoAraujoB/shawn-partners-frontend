import React, { useEffect, useState } from 'react';

import UsersList from '../../components/UsersList';
import paginator from '../../util/paginator';

import api from '../../services/api';

import { Wrapper } from './styles';

const ListAllUsers: React.FC = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      setAllUsers(response.data);
      setLoading(false);
    }
    loadUsers();
  }, []);

  useEffect(() => {
    const paginated = paginator(allUsers, page);
    setUsers(paginated.data);
  }, [allUsers, page]);

  function handlePreviousPage(e: React.FormEvent) {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage(e: React.FormEvent) {
    e.preventDefault();
    if (allUsers.length / 5 > page) {
      setPage(page + 1);
    }
  }

  return (
    <Wrapper>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div>
          <UsersList users={users} />
          <button onClick={handlePreviousPage}>Previous Page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      )}
    </Wrapper>
  );
};

export default ListAllUsers;
