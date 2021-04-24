import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { colors } from '@/renderer/styles/variables';
import { Button, Input } from '@/renderer/styles/shared';
import { Link } from 'react-router-dom';

export const PageHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const PageHeaderHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 570px;
`;

export const SaveChangesButton = styled(Button)`
  width: 130px;
  height: 25px;
  font-size: 12px;
  font-weight: 700;
  background: ${colors.success};
  color: ${colors.textLight};
  border-radius: 3px;
  margin-bottom: 0;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.1, colors.success)};
  }
`;

export const StartLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const EditableTitleInput = styled.input`
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 800;
  background: none;
  border: 0;
  margin-left: 15px;
  margin-bottom: 2px;

  &:hover,
  &:focus {
    border-bottom: 2px solid ${colors.textDark};
    margin-bottom: 0px;
  }
`;

export const AddProgramButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background: ${colors.primaryVariant};
  border-radius: 5px;
  padding: 12px 10px;
  border: 0;
  outline: none;
  font-weight: bold;
  margin-bottom: 10px;
  transition: 0.2s;

  img {
    margin-right: 12px;
  }

  &:hover {
    background: ${darken(0.1, colors.primaryVariant)};
  }
`;

export const ApplicationsList = styled.ul``;

export const ApplicationItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 10px;
  background: ${colors.primaryVariant};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ApplicationItemHeader = styled.div`
  display: flex;
  flex-direction: row;

  p {
    flex: 1;
    padding: 0px 10px;
    font-weight: bold;
  }
`;

export const ApplicationItemBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label,
  p {
    margin-bottom: 5px;
  }

  div {
    display: flex;

    & > ${Input} {
      flex: 1;
    }

    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 50%;

      & > ${Input} {
        margin-right: 5px;
      }
    }
  }
`;

export const BrowseButton = styled(Button)`
  width: 90px;
  height: 25px;
  font-size: 12px;
  background: ${colors.primary};
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 0;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }
`;

export const FormGoupRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DiscardButton = styled(BrowseButton)`
  width: 130px;
  margin: 0;
  margin-top: 20px;
  align-self: flex-end;
`;

export const LaunchButton = styled(Button)`
  font-size: 14px;
  font-weight: 800;
  background: ${colors.secondary};
  color: ${colors.textLight};
  transition: 0.2s;

  &:hover {
    background: ${lighten(0.2, colors.secondary)};
  }
`;

export const DeleteButton = styled(Button)`
  height: 30px;
  font-size: 14px;
  background: ${colors.error};
  color: ${colors.textLight};
  transition: 0.2s;

  &:hover {
    background: ${darken(0.1, colors.error)};
  }
`;

export const DatesInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 11px;
  }
`;
