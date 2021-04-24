import ProgramDTO from './ProgramDTO';

export default interface WorkspaceDTO {
  id: string;
  title: string;
  programs: Array<ProgramDTO>;
  createdAt: Date;
  updatedAt: Date;
}
