import React, { useCallback, useMemo, useState } from 'react';
import {
  PageContainer,
  PageHeader,
  PageContent,
  MainContent,
  SideContent,
  Button,
  Input,
} from '@/renderer/styles/shared';
import { useHistory } from 'react-router';
import WorkspaceDTO from '@/renderer/dtos/WorkspaceDTO';
import getData from '@/renderer/utils/testData';
import { differenceInDays, format } from 'date-fns';
import { DATE_FORMAT_SHORT } from '@/constants';
import { Collapsible } from '@/renderer/components/CollapsableContainer';
import {
  SearchForm,
  SearchButton,
  ListContainer,
  WorkspaceList,
  ListHeaderItem,
  WorkspaceItem,
  Labels,
  Actions,
  DeleteButton,
  InspectButton,
  LaunchButton,
} from './styles';

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

      if (date in groupObject) {
        groupObject[date].push(workspace);
      } else {
        groupObject[date] = [workspace];
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
      history.push('/workspace', { workspace });
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
            <Input type="text" placeholder="Search workspace" />
            <SearchButton>Search</SearchButton>
          </SearchForm>
          <ListContainer>
            <WorkspaceList>
              {listGroups.map((group: ListGroup) => {
                const label = (
                  <ListHeaderItem key={group.label}>
                    {group.label}
                  </ListHeaderItem>
                );

                const itemsElements = group.items.map(workspace => {
                  const createdAtFormatted = format(
                    workspace.createdAt,
                    DATE_FORMAT_SHORT,
                  );

                  return (
                    <WorkspaceItem key={workspace.id}>
                      <Collapsible title={workspace.title}>
                        <Labels>
                          <p>{`${workspace.programs.length} programs`}</p>
                          <p>{`created at ${createdAtFormatted}`}</p>
                        </Labels>

                        <Actions>
                          <DeleteButton onClick={() => handleDelete(workspace)}>
                            Delete
                          </DeleteButton>
                          <InspectButton
                            onClick={() => handleInspect(workspace)}
                          >
                            Inspect
                          </InspectButton>
                          <LaunchButton onClick={() => handleLaunch(workspace)}>
                            Launch
                          </LaunchButton>
                        </Actions>
                      </Collapsible>
                    </WorkspaceItem>
                  );
                });

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
