import Sigma from 'sigma';
import nodes from './nodes';
import edges from './edges';

Sigma.classes.graph.addMethod('getAllNeighbors', function(id) {
  return Object.keys(this.allNeighborsIndex[id]);
});

var s = new Sigma({
  container: 'root',
});

s.settings({
  doubleClickEnabled: false,
  mouseWheelEnabled: false,
});

s.graph.read({
  nodes,
  edges,
});

s.bind('clickNode', (data) => {
  const {
    captor: { shiftKey: take },
    node: { id },
  } = data.data;

  distribute(id, take);
});

s.refresh();

function distribute(id, take) {
  const neighbors = s.graph.getAllNeighbors(id);

  let count = Number.parseInt(s.graph.nodes(id).label, 10);

  if (take) {
    count += neighbors.length;
  } else {
    count -= neighbors.length;
  }

  s.graph.nodes(id).label = count.toString();
  s.refresh();
}
