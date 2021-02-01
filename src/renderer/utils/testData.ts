import { compareDesc, parseISO } from 'date-fns';
import WorkspaceDTO from '../dtos/WorkspaceDTO';

const getData = (): Array<WorkspaceDTO> => {
  const data: Array<WorkspaceDTO> = [
    {
      id: '213bbdff-181a-4573-b24d-7560a66a159d',
      title: 'Work setup (docker + java + plsql)',
      programs: [
        {
          name: 'Docker',
          type: 'exe',
          target: '/path/to/docker',
          args: '--launch-arg',
          order: 1,
        },
        {
          name: 'PlSql',
          type: 'exe',
          target: '/path/to/plsql',
          args: '--launch-arg',
          order: 3,
        },
        {
          name: 'Eclipse',
          type: 'exe',
          target: '/path/to/eclipse',
          args: '--launch-arg',
          order: 2,
        },
      ],
      createdAt: parseISO('2021-01-31T20:13:25.775Z'),
      updatedAt: parseISO('2021-01-31T20:13:25.775Z'),
    },
    {
      id: '36aa94a6-b7ab-4f66-95ca-7878cbdc4475',
      title: 'Casual web',
      programs: [
        {
          name: 'Opera browser',
          type: 'exe',
          target: '/path/to/opera',
          args: '--launch-arg',
          order: 1,
        },
        {
          name: 'Spotify',
          type: 'exe',
          target: '/path/to/spotify',
          args: '--launch-arg',
          order: 3,
        },
      ],
      createdAt: parseISO('2021-01-30T20:13:25.775Z'),
      updatedAt: parseISO('2021-01-30T20:13:25.775Z'),
    },
    {
      id: '1839f7d5-912b-430b-8720-48dad2f02ce6',
      title: 'Gaming with steam',
      programs: [
        {
          name: 'Steam',
          type: 'exe',
          target: '/path/to/steam',
          args: '--launch-arg',
          order: 2,
        },
        {
          name: 'Afterburner',
          type: 'exe',
          target: '/path/to/afterburner',
          args: '--launch-arg',
          order: 1,
        },
      ],
      createdAt: parseISO('2020-12-03T20:13:25.775Z'),
      updatedAt: parseISO('2020-12-24T20:13:25.775Z'),
    },
    {
      id: '9a9aa2f4-091a-4453-b304-dfd2763ba96e',
      title: 'Streaming',
      programs: [
        {
          name: 'Steam',
          type: 'exe',
          target: '/path/to/steam',
          args: '--launch-arg',
          order: 2,
        },
        {
          name: 'Afterburner',
          type: 'exe',
          target: '/path/to/afterburner',
          args: '--launch-arg',
          order: 1,
        },
        {
          name: 'OBS',
          type: 'exe',
          target: '/path/to/obs',
          args: '--launch-arg',
          order: 1,
        },
      ],
      createdAt: parseISO('2020-12-03T20:13:25.775Z'),
      updatedAt: parseISO('2020-12-24T20:13:25.775Z'),
    },
  ];

  data.sort((a, b) => compareDesc(a.createdAt, b.createdAt));

  return data;
};

export default getData;
