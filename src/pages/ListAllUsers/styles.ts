import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 20px 40px 10px 40px;
  border-radius: 5px;
  background: ${lighten(0.08, '#121212')};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 10px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6666;
  border-radius: 50%;
  border: 0;
`;

export const AddIcon = styled(MdKeyboardArrowRight)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6666;
  border-radius: 50%;
  border: 0;
`;

export const RemoveIcon = styled(MdKeyboardArrowLeft)`
  width: 30px;
  height: 30px;
  color: #fff;
`;
