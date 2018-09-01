import Sigma from 'sigma';
import nodes from './nodes';
import edges from './edges';

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
  let count = Number.parseInt(s.graph.nodes(id).label, 10);

  if (take) {
    count += 1;
  } else {
    count -= 1;
  }

  s.graph.nodes(id).label = count.toString();
  s.refresh();
}
