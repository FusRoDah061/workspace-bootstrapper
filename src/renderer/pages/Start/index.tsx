import React from 'react';
import {
  PageContainer,
  PageHeader,
  PageContent,
  MainContent,
  SideContent,
} from '@/renderer/styles/shared';
import {
  SearchForm,
  SearchButton,
  WorkspaceList,
  ListHearItem,
  WorkspaceItem,
  Title,
  Labels,
  Actions,
  DeleteButton,
  InspectButton,
  LaunchButton,
  Button,
} from './styles';

const Start: React.FC = () => (
  <PageContainer>
    <PageHeader>
      <h1>Your workspaces</h1>
    </PageHeader>

    <PageContent>
      <MainContent>
        <SearchForm>
          <input type="text" placeholder="Search workspace" />
          <SearchButton>Search</SearchButton>
        </SearchForm>

        <WorkspaceList>
          <ListHearItem>Today</ListHearItem>

          <WorkspaceItem>
            <Title>Work setup (docker + java + plsql)</Title>
            <Labels>
              <p>4 programs</p>
              <p>created at 07/01/2019</p>
            </Labels>
          </WorkspaceItem>

          <ListHearItem>Yesterday</ListHearItem>

          <WorkspaceItem>
            <Title>Casual web</Title>
            <Labels>
              <p>2 programs</p>
              <p>created at 10/10/2018</p>
            </Labels>

            <Actions>
              <DeleteButton>Delete</DeleteButton>
              <InspectButton>Inspect</InspectButton>
              <LaunchButton>Launch</LaunchButton>
            </Actions>
          </WorkspaceItem>

          <ListHearItem>December, 2020</ListHearItem>

          <WorkspaceItem>
            <Title>Gaming with steam</Title>
            <Labels>
              <p>2 programs</p>
              <p>created at 04/12/2012</p>
            </Labels>
          </WorkspaceItem>
          <WorkspaceItem>
            <Title>Streaming</Title>
            <Labels>
              <p>3 programs</p>
              <p>created at 07/25/2020</p>
            </Labels>
          </WorkspaceItem>
        </WorkspaceList>
      </MainContent>

      <SideContent>
        <Button>Create workspace</Button>
        <Button>Import workspaces</Button>
      </SideContent>
    </PageContent>
  </PageContainer>
);

export default Start;
