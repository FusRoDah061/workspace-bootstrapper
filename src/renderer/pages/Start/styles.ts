import { colors } from '@/renderer/styles/variables';
import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 16px;
  text-align: center;
  border: none;
  background: ${colors.primaryVariant};
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 10px;

  input {
    flex: 1;
    font-size: 14px;
    padding: 0 10px;
    margin-right: 20px;
    border: 1px solid ${colors.secondary};
    border-radius: 3px;
  }
`;

export const SearchButton = styled.button`
  width: 110px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  border: none;
  background: ${colors.primaryVariant};
  border-radius: 3px;
`;

export const ListContainer = styled.div`
  height: 423px;
  margin-top: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const WorkspaceList = styled.ul`
`;

export const ListHearItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
`;

export const WorkspaceItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background: ${colors.primaryVariant};
`;

export const Title = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Labels = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  p:nth-child(2) {
    text-align: right;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const DeleteButton = styled(Button)`
  width: 90px;
  height: 25px;
  font-size: 12px;
  background: ${colors.error};
  color: ${colors.textLight};
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 0;
`;

export const InspectButton = styled(Button)`
  width: 90px;
  height: 25px;
  font-size: 12px;
  background: ${colors.primary};
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 0;
`;

export const LaunchButton = styled(Button)`
  width: 90px;
  height: 25px;
  font-size: 12px;
  font-weight: 700;
  background: ${colors.secondary};
  color: ${colors.textLight};
  border-radius: 3px;
  margin-bottom: 0;
`;
