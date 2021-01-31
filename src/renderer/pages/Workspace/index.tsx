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
  ListContainer,
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

import chevronUp from '../../assets/chevron-up-icon-light.svg';
import chevronDown from '../../assets/chevron-down-icon-light.svg';

const Workspace: React.FC = () => (
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
        <ListContainer>
          <WorkspaceList>
            <ListHearItem>Today</ListHearItem>

            <WorkspaceItem>
              <Title>
                Work setup (docker + java + plsql)
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
              <Labels>
                <p>4 programs</p>
                <p>created at 07/01/2019</p>
              </Labels>
            </WorkspaceItem>

            <ListHearItem>Yesterday</ListHearItem>

            <WorkspaceItem>
              <Title>
                Casual web
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
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
              <Title>
                Gaming with steam
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
              <Labels>
                <p>2 programs</p>
                <p>created at 04/12/2012</p>
              </Labels>
            </WorkspaceItem>
            <WorkspaceItem>
              <Title>
                Streaming
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
              <Labels>
                <p>3 programs</p>
                <p>created at 07/25/2020</p>
              </Labels>
            </WorkspaceItem>

            <ListHearItem>December, 2020</ListHearItem>

            <WorkspaceItem>
              <Title>
                Gaming with steam
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
              <Labels>
                <p>2 programs</p>
                <p>created at 04/12/2012</p>
              </Labels>
            </WorkspaceItem>
            <WorkspaceItem>
              <Title>
                Streaming
                <img src={chevronDown} alt="Arrow pointing down" />
              </Title>
              <Labels>
                <p>3 programs</p>
                <p>created at 07/25/2020</p>
              </Labels>
            </WorkspaceItem>
          </WorkspaceList>
        </ListContainer>
      </MainContent>

      <SideContent>
        <Button>Create workspace</Button>
        <Button>Import workspaces</Button>
      </SideContent>
    </PageContent>
  </PageContainer>
);

export default Workspace;
