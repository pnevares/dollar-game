import Sigma from 'sigma';
import nodes from './nodes';
import edges from './edges';

// custom method(s)
Sigma.classes.graph.addMethod('getAllNeighbors', function(id) {
  return Object.keys(this.allNeighborsIndex[id]);
});

export default function createGraph() {
  const s = new Sigma({
    container: 'root',
  });
  
  s.settings({
    doubleClickEnabled: false,
    mouseWheelEnabled: false,
    defaultLabelSize: 24,
    labelColor: 'node',
    edgeColor: 'default',
  });
  
  s.graph.read({
    nodes,
    edges,
  });

  return s;
}
