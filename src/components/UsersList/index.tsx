import React from 'react';

import UserListItem from '../UserListItem';
import { Wrapper } from './styles';

interface User {
  node_id: string;
  login: string;
}

interface props {
  users: Array<User>;
}

const UsersList: React.FC<props> = ({ users }) => {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserListItem user={user} key={user.node_id} />
      ))}
    </Wrapper>
  );
};

export default UsersList;
