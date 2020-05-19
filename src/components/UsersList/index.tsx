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
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserListItem user={user} key={user.node_id} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default UsersList;
