import Sigma from 'sigma';
import nodes from './nodes';
import edges from './edges';

var s = new Sigma({
  container: 'root',
  // doubleClickEnabled: false,
  // mouseWheelEnabled: false,
});

nodes.forEach(node => {
  s.graph.addNode(node);
});

edges.forEach(edge => {
  s.graph.addEdge(edge);
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
