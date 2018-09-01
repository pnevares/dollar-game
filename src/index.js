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
  let value = Number.parseInt(s.graph.nodes(id).label, 10);

  neighbors.forEach(neighbor => {
    let neighborsValue = Number.parseInt(s.graph.nodes(neighbor).label, 10);

    if (take) {
      neighborsValue -= 1;
      value += 1;
    } else {
      neighborsValue += 1;
      value -= 1;
    }

    s.graph.nodes(neighbor).label = neighborsValue.toString();
  });

  s.graph.nodes(id).label = value.toString();
  s.refresh();
}
