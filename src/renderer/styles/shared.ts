import styled from 'styled-components';

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 900px;
  max-height: 520px;
  padding: 10px;
`;

export const PageHeader = styled.header`
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
