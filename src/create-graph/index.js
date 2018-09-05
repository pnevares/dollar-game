import Sigma from 'sigma';
import customSigmaMethods from './custom-sigma-methods';
import bindHandlers from './bind-handlers';
import updateGraph from './update-graph';
import { CONTAINER } from '../constants';

customSigmaMethods();

export default function createGraph(puzzle) {
  const s = new Sigma({
    container: CONTAINER,
  });

  s.settings({
    doubleClickEnabled: false,
    mouseWheelEnabled: false,
    autoResize: false,

    sideMargin: 0.3,
    maxEdgeSize: 4,
    maxNodeSize: 10,

    defaultLabelSize: 30,
    labelColor: 'node',
    edgeColor: 'default',
    defaultEdgeColor: '#ccc',
  });

  if (puzzle) {
    s.graph.read(puzzle);
  }

  bindHandlers(s);
  updateGraph(s);
  s.refresh();

  return s;
}
