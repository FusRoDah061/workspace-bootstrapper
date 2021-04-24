export default interface ApplicationDTO {
  name: string;
  type: 'exe' | 'cmd';
  target: string;
  args: string;
  order: number;
}
