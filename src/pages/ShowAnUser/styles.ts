import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: 30px;
  padding: 20px 40px 10px 40px;
  border-radius: 5px;
  background: ${lighten(0.08, '#121212')};

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 30px 0px 30px;
  }

  table {
    border-collapse: collapse;
    width: auto;
    tr {
      & > td {
        padding: 15px 10px 15px;
        border-bottom: 1px solid #eee;
      }
      & > th {
        padding: 15px 10px 15px;
        border-bottom: 1px solid #eee;
      }
      &:hover {
        background: ${lighten(0.05, lighten(0.08, '#121212'))};
      }
    }
  }
`;
