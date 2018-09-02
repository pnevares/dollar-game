const nodes = [
  {
    id: 'n0',
    label: '1',
    x: 0,
    y: 0,
    size: 1,
  },
  {
    id: 'n1',
    label: '-1',
    x: 2,
    y: 0,
    size: 1,
  },
  {
    id: 'n2',
    label: '-2',
    x: 4,
    y: 2,
    size: 1,
  },
  {
    id: 'n3',
    label: '2',
    x: 2,
    y: 4,
    size: 1,
  },
  {
    id: 'n4',
    label: '0',
    x: 0,
    y: 2,
    size: 1,
  },
  {
    id: 'n5',
    label: '2',
    x: 4,
    y: 4,
    size: 1,
  },
];

const edges = [
  {
    id: 'e0',
    source: 'n0',
    target: 'n1',
    size: 1,
  },
  {
    id: 'e1',
    source: 'n0',
    target: 'n4',
    size: 1,
  },
  {
    id: 'e2',
    source: 'n0',
    target: 'n5',
    size: 1,
  },
  {
    id: 'e3',
    source: 'n2',
    target: 'n5',
    size: 1,
  },
  {
    id: 'e4',
    source: 'n3',
    target: 'n5',
    size: 1,
  },
];

export default {
  nodes,
  edges,
};
