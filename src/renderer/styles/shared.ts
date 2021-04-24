import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from './variables';

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 900px;
  max-height: 520px;
  padding: 10px;
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;

  h1 {
    text-align: left;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: 570px 280px;
  grid-column-gap: 30px;
`;

export const MainContent = styled.section``;

export const SideContent = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 16px;
  text-align: center;
  border: none;
  background: ${colors.primaryVariant};
  margin-bottom: 10px;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.05, colors.primaryVariant)};
  }
`;

export const Input = styled.input`
  height: 25px;
  font-size: 14px;
  padding: 0 10px;
  border: 1px solid ${colors.secondary};
  border-radius: 3px;
`;
