/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  PageContainer,
  PageHeader,
  PageContent,
  MainContent,
  SideContent,
  Input,
} from '@/renderer/styles/shared';
import { useHistory } from 'react-router';
import WorkspaceDTO from '@/renderer/dtos/WorkspaceDTO';
import { format } from 'date-fns';
import { DATE_FORMAT_SHORT } from '@/constants';
import { Collapsible } from '@/renderer/components/CollapsableContainer';
import {
  PageHeaderTitle,
  PageHeaderHeading,
  SaveChangesButton,
  StartLink,
  EditableTitleInput,
  AddProgramButton,
  ApplicationsList,
  ApplicationItem,
  ApplicationItemHeader,
  ApplicationItemBody,
  FormGroup,
  BrowseButton,
  FormGoupRow,
  DiscardButton,
  LaunchButton,
  DeleteButton,
  DatesInfo,
} from './styles';

import backIcon from '../../assets/back-icon-light.svg';
import addIcon from '../../assets/add-icon-light.svg';
import dragIcon from '../../assets/drag-icon-light.svg';

export interface WorkspaceRouteState {
  workspace: WorkspaceDTO;
}

const Workspace: React.FC = () => {
  const history = useHistory<WorkspaceRouteState>();
  const originalWorkspace = history.location.state.workspace;
  const [editedWorkspace, setEditedWorkspace] = useState<WorkspaceDTO>(() => {
    const workspace = originalWorkspace;
    workspace.applications.sort((a, b) => a.order - b.order);
    return workspace;
  });
  const [changesMade, setChangesMade] = useState(false);

  const createdAtFormatted = useMemo(() => {
    return format(editedWorkspace.createdAt, DATE_FORMAT_SHORT);
  }, [editedWorkspace.createdAt]);

  const updatedAtFormatted = useMemo(() => {
    return format(editedWorkspace.updatedAt, DATE_FORMAT_SHORT);
  }, [editedWorkspace.updatedAt]);

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>
          <StartLink to="/">
            <img src={backIcon} alt="Back to start" />
          </StartLink>

          <EditableTitleInput value={editedWorkspace.title} />
        </PageHeaderTitle>

        <PageHeaderHeading>
          <p>Programs</p>

          {changesMade && <SaveChangesButton>Save changes</SaveChangesButton>}
        </PageHeaderHeading>
      </PageHeader>

      <PageContent>
        <MainContent>
          <AddProgramButton>
            <img src={addIcon} alt="+" />
            Add new application
          </AddProgramButton>

          <ApplicationsList>
            {editedWorkspace.applications.map(application => {
              return (
                <ApplicationItem>
                  <Collapsible
                    title={application.name}
                    header={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <ApplicationItemHeader>
                        <img src={dragIcon} alt="Drag" />
                        <p>{application.name}</p>
                      </ApplicationItemHeader>
                    }
                  >
                    <ApplicationItemBody>
                      <FormGroup>
                        <label htmlFor="js-application-name">
                          Application name
                        </label>
                        <Input
                          id="js-application-name"
                          type="text"
                          value={application.name}
                        />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="js-executable-path">
                          Executable path
                        </label>
                        <div>
                          <Input
                            id="js-executable-path"
                            type="text"
                            value={application.target}
                          />
                          <BrowseButton>Browse...</BrowseButton>
                        </div>
                      </FormGroup>

                      <FormGoupRow>
                        <FormGroup>
                          <p>Application type</p>
                          <div>
                            <label htmlFor="js-program-type-executable">
                              <Input
                                id="js-program-type-executable"
                                type="radio"
                                checked={application.type === 'exe'}
                              />
                              Executable
                            </label>
                            <label htmlFor="js-program-type-command">
                              <Input
                                id="js-program-type-command"
                                type="radio"
                                checked={application.type === 'cmd'}
                              />
                              Command
                            </label>
                          </div>
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="js-launch-args">
                            Launch arguments
                          </label>
                          <Input
                            id="js-launch-args"
                            type="text"
                            value={application.args}
                          />
                        </FormGroup>
                      </FormGoupRow>

                      <DiscardButton>Discard changes</DiscardButton>
                    </ApplicationItemBody>
                  </Collapsible>
                </ApplicationItem>
              );
            })}
          </ApplicationsList>
        </MainContent>

        <SideContent>
          <LaunchButton>Launch</LaunchButton>
          <DeleteButton>Delete</DeleteButton>

          <DatesInfo>
            <p>{`created at ${createdAtFormatted}`}</p>
            <p>{`last updated at ${updatedAtFormatted}`}</p>
          </DatesInfo>
        </SideContent>
      </PageContent>
    </PageContainer>
  );
};

export default Workspace;
