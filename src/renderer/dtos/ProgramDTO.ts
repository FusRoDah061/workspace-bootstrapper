export default interface ProgramDTO {
  name: string;
  type: 'exe' | 'cmd';
  target: string;
  args: string;
  order: number;
}
