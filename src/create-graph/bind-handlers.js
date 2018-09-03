import distribute from './distribute';
import updateGraph from './update-graph';

export default function bindHandlers(s) {
  s.bind('clickNode', (data) => {
    const {
      captor: { shiftKey: take },
      node: { id },
    } = data.data;

    distribute(s, id, take);

    updateGraph(s);
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
