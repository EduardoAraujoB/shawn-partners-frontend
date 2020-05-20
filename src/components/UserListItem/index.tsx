import React from 'react';

import { ShowProfileButton, CustomLink } from './styles';

interface props {
  user: {
    node_id: string;
    login: string;
  };
}

const UserListItem: React.FC<props> = ({ user }) => {
  return (
    <tr>
      <td>{user.login}</td>
      <td>{user.node_id}</td>
      <td>
        <CustomLink to={`/users/${user.login}`}>
          <ShowProfileButton>Show profile</ShowProfileButton>
        </CustomLink>
      </td>
    </tr>
  );
};

export default UserListItem;
