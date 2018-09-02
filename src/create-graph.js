import Sigma from 'sigma';
import puzzles from './puzzles';

// custom method(s)
Sigma.classes.graph.addMethod('getAllNeighbors', function getAllNeighbors(id) {
  return Object.keys(this.allNeighborsIndex[id]);
});
Sigma.classes.graph.addMethod('updateNode', function updateNode(id, patch) {
  Object.entries(patch).forEach(([key, value]) => {
    this.nodesIndex[id][key] = value;
  });
  return true;
});
Sigma.classes.graph.addMethod('updateEdge', function updateEdge(id, patch) {
  Object.entries(patch).forEach(([key, value]) => {
    this.edgesIndex[id][key] = value;
  });
  return true;
});

export default function createGraph() {
  const s = new Sigma({
    container: 'root',
  });

  s.settings({
    doubleClickEnabled: false,
    mouseWheelEnabled: false,

    sideMargin: 0.3,
    maxEdgeSize: 4,
    maxNodeSize: 10,

    defaultLabelSize: 30,
    labelColor: 'node',
    edgeColor: 'default',
    defaultEdgeColor: '#ccc',
  });

  s.graph.read(puzzles[2]);

  return s;
}
