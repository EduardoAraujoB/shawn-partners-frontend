import React from 'react';

import { Wrapper } from './styles';

interface props {
  user: {
    node_id: string;
    login: string;
  };
}

const UserListItem: React.FC<props> = ({ user }) => {
  return (
    <Wrapper>
      <strong>{user.login}</strong>
      <span>{user.node_id}</span>
    </Wrapper>
  );
};

export default UserListItem;
