import createGraph from './create-graph';
import distribute from './distribute';

const s = createGraph();

s.bind('clickNode', (data) => {
  const {
    captor: { shiftKey: take },
    node: { id },
  } = data.data;
  
  distribute(s, id, take);
});

s.graph.nodes().forEach(node => {
  let value = Number.parseInt(node.label, 10);
  if (value >= 0) {
    s.graph.nodes(node.id).color = '#0f0'; // green
  } else {
    s.graph.nodes(node.id).color = '#f00'; // red
  }
});

s.refresh();
