import React, { useCallback, useMemo, useState } from 'react';
import {
  PageContainer,
  PageHeader,
  PageContent,
  MainContent,
  SideContent,
} from '@/renderer/styles/shared';
import { useHistory } from 'react-router';
import WorkspaceDTO from '@/renderer/dtos/WorkspaceDTO';
import getData from '@/renderer/utils/testData';
import { differenceInDays, format } from 'date-fns';
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

interface ListGroup {
  label: string;
  items: Array<WorkspaceDTO>;
}

const Start: React.FC = () => {
  const history = useHistory();
  const [workspaces, setWorkspaces] = useState<Array<WorkspaceDTO>>(getData());

  const listGroups = useMemo((): Array<ListGroup> => {
    const today = new Date();
    const groupObject: Record<string, Array<WorkspaceDTO>> = {};

    workspaces.forEach(workspace => {
      const difference = differenceInDays(today, workspace.createdAt);
      let date;

      if (difference <= 0) {
        date = 'Today';
      } else if (difference === 1) {
        date = 'Yesterday';
      } else {
        date = format(workspace.createdAt, 'MMMM, yyyy');
      }

      const formattedWorkspace = workspace;
      formattedWorkspace.formattedCreatedAt = format(
        workspace.createdAt,
        'dd/MM/yyyy',
      );
      formattedWorkspace.formattedUpdatedAt = format(
        workspace.updatedAt,
        'dd/MM/yyyy',
      );

      if (date in groupObject) {
        groupObject[date].push(formattedWorkspace);
      } else {
        groupObject[date] = [formattedWorkspace];
      }
    });

    const groups = Object.keys(groupObject).map(key => ({
      label: key,
      items: groupObject[key],
    }));

    return groups;
  }, [workspaces]);

  const handleInspect = useCallback(
    (workspace: WorkspaceDTO) => {
      console.log(workspace);
      history.push('/workspace');
    },
    [history],
  );

  const handleDelete = useCallback((workspace: WorkspaceDTO) => {
    console.log(workspace);
  }, []);

  const handleLaunch = useCallback((workspace: WorkspaceDTO) => {
    console.log(workspace);
  }, []);

  return (
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
              {listGroups.map((group: ListGroup) => {
                const label = (
                  <ListHearItem key={group.label}>{group.label}</ListHearItem>
                );

                const itemsElements = group.items.map(workspace => (
                  <WorkspaceItem key={workspace.id}>
                    <Title>
                      {workspace.title}
                      <img src={chevronDown} alt="Arrow pointing down" />
                    </Title>
                    <Labels>
                      <p>{`${workspace.programs.length} programs`}</p>
                      <p>
                        created at
                        {workspace.formattedCreatedAt}
                      </p>
                    </Labels>

                    <Actions>
                      <DeleteButton onClick={() => handleDelete(workspace)}>
                        Delete
                      </DeleteButton>
                      <InspectButton onClick={() => handleInspect(workspace)}>
                        Inspect
                      </InspectButton>
                      <LaunchButton onClick={() => handleLaunch(workspace)}>
                        Launch
                      </LaunchButton>
                    </Actions>
                  </WorkspaceItem>
                ));

                return [label, ...itemsElements];
              })}
            </WorkspaceList>
          </ListContainer>
        </MainContent>

        <SideContent>
          <Button>Create workspace</Button>
          <Button>Import workspaces</Button>
          <Button>Export workspaces</Button>
        </SideContent>
      </PageContent>
    </PageContainer>
  );
};

export default Start;
