import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  & > table {
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
