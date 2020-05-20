import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';

import { Wrapper, ProfileWrapper } from './styles';
interface params {
  name: string;
}

interface user {
  avatar_url: string;
  id: number;
  created_at: string;
}

interface repo {
  id: string;
  name: string;
  url: string;
}

const ShowAnUser: React.FC<RouteComponentProps<params>> = ({ match }) => {
  const [userInfo, setUserInfo] = useState<user | null>(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get(`/users/${match.params.name}`);
      const getRepos = await api.get(`/users/${match.params.name}/repos`);
      if (response.data !== null && response.data !== undefined) {
        setUserInfo(response.data);
        console.log(getRepos.data);
        setRepos(getRepos.data);
      }
      setLoading(false);
    }
    loadInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <span>Loading</span>
      ) : (
        <ProfileWrapper>
          {userInfo !== null ? (
            <div>
              <img alt="profile" src={userInfo.avatar_url}></img>
              <div>
                <div>
                  <strong>id: </strong>
                  <span>{userInfo.id}</span>
                </div>
                <div>
                  <strong>login: </strong>
                  <span>{match.params.name}</span>
                </div>
                <div>
                  <strong>created at: </strong>
                  <span>{userInfo.created_at}</span>
                </div>
                <div>
                  <strong>profile url: </strong>
                  <span>{`https://github.com/${match.params.name}`}</span>
                </div>
              </div>
              <h3>Public Repos</h3>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>url</th>
                  </tr>
                </thead>
                <tbody>
                  {repos.map((repo: repo) => (
                    <tr key={repo.id}>
                      <td>{repo.id}</td>
                      <td>{repo.name}</td>
                      <td>{repo.url}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <span>Invalid User</span>
          )}
        </ProfileWrapper>
      )}
    </Wrapper>
  );
};

export default ShowAnUser;
