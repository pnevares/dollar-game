import Sigma from 'sigma';
import { CONTAINER } from '../constants';

export default function customSigmaMethods() {
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
    document.getElementById(CONTAINER).innerHTML = '';
    this.kill();
    return true;
  });
}
