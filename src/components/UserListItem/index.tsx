import React from 'react';

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
    </tr>
  );
};

export default UserListItem;
