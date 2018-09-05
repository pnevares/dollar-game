import Sigma from 'sigma';
import customSigmaMethods from './custom-sigma-methods';
import bindHandlers from './bind-handlers';
import updateGraph from './update-graph';
import {
  BUILDER_MODE,
  CONTAINER,
  DEFAULT_EDGE_COLOR,
  PLAY_MODE,
} from '../constants';

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
    defaultEdgeColor: DEFAULT_EDGE_COLOR,
  });

  if (puzzle) {
    s.mode = PLAY_MODE;
    s.graph.read(puzzle);
  } else {
    s.graph.read({
      nodes: [{
        id: 'n0',
        label: '-1',
        x: 0,
        y: 0,
        size: 1,
      }],
      edges: [],
    });
    s.mode = BUILDER_MODE;
  }

  bindHandlers(s);
  updateGraph(s);
  s.refresh();

  return s;
}
