import createGraph from './create-graph';
import distribute from './distribute';
import setColors from './set-colors';

const s = createGraph();

s.bind('clickNode', (data) => {
  const {
    captor: { shiftKey: take },
    node: { id },
  } = data.data;

  distribute(s, id, take);
  setColors(s);
  s.refresh();
});

s.bind('overNode', (data) => {
  const {
    node: { id: overNodeId },
  } = data.data;

  s.graph.edges().forEach((edge) => {
    if (edge.source === overNodeId || edge.target === overNodeId) {
      s.graph.edges(edge.id).color = '#f0f';
    }
  });

  s.refresh();
});

s.bind('outNode', () => {
  s.graph.edges().forEach((edge) => {
    delete s.graph.edges(edge.id).color;
  });

  s.refresh();
});

setColors(s);

s.refresh();
