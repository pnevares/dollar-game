import distribute from './distribute';
import updateGraph from './update-graph';
import { BUILDER_MODE, PLAY_MODE } from '../constants';

export default function bindHandlers(s) {
  s.bind('clickNode', (data) => {
    const {
      captor: { shiftKey: take },
      node: { id },
    } = data.data;

    switch (s.mode) {
      case BUILDER_MODE:
        s.graph.updateNode(id, { label: '-2' });
        break;
      case PLAY_MODE:
        distribute(s, id, take);
        updateGraph(s);
        break;
      default:
        break;
    }
    s.refresh();
  });

  s.bind('overNode', (data) => {
    const {
      node: { id: overNodeId },
    } = data.data;

    s.graph.edges().forEach((edge) => {
      if (edge.source === overNodeId || edge.target === overNodeId) {
        s.graph.updateEdge(edge.id, { color: '#f0f' });
      }
    });

    s.refresh();
  });

  s.bind('outNode', () => {
    s.graph.edges().forEach((edge) => {
      s.graph.updateEdge(edge.id, { color: undefined });
    });

    s.refresh();
  });
}
