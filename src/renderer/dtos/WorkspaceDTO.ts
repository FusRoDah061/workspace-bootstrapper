import ApplicationDTO from './ApplicationDTO';

export default interface WorkspaceDTO {
  id: string;
  title: string;
  applications: Array<ApplicationDTO>;
  createdAt: Date;
  updatedAt: Date;
}
