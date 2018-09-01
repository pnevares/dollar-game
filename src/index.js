import Sigma from 'sigma';

var s = new Sigma({
  container: 'root',
  // doubleClickEnabled: false,
  // mouseWheelEnabled: false,
});

s.graph.addNode({
  id: 'n0',
  label: '1',
  x: 1,
  y: 0,
  size: 2,
  color: '#000'
}).addNode({
  id: 'n1',
  label: '-1',
  x: 0,
  y: 1,
  size: 2,
  color: '#000'
}).addNode({
  id: 'n2',
  label: '-2',
  x: 2,
  y: 1,
  size: 2,
  color: '#000'
}).addNode({
  id: 'n3',
  label: '2',
  x: 0,
  y: 2,
  size: 2,
  color: '#000'
}).addNode({
  id: 'n4',
  label: '3',
  x: 1,
  y: 2,
  size: 2,
  color: '#000'
}).addEdge({
  id: 'e0',
  source: 'n0',
  target: 'n4'
}).addEdge({
  id: 'e1',
  source: 'n0',
  target: 'n2'
}).addEdge({
  id: 'e2',
  source: 'n1',
  target: 'n2'
}).addEdge({
  id: 'e3',
  source: 'n2',
  target: 'n4'
}).addEdge({
  id: 'e4',
  source: 'n3',
  target: 'n4'
});

s.bind('clickNode', (data) => {
  console.log(data);

  const {
    captor: { shiftKey },
    node: { id }
  } = data.data;

  if (shiftKey) {
    console.log(`shift-clicked ${id}`);
  } else {
    console.log(`clicked ${id}`);
  }
});

s.refresh();

// console.log(s.graph.nodes('n4'));
// s.graph.nodes('n4').label = "2";
// console.log(s.graph.nodes('n4'));

// s.refresh();
