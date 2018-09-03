import Sigma from 'sigma';
import bindHandlers from './bind-handlers';
import setColors from './set-colors';

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
Sigma.classes.graph.addMethod('destroy', function destroy() {
  document.getElementById('container').innerHTML = '';
  this.kill();
  return true;
});

export default function createGraph(puzzle) {
  const s = new Sigma({
    container: 'container',
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

  s.graph.read(puzzle);

  bindHandlers(s);
  setColors(s);
  s.refresh();

  return s;
}
