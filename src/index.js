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

setColors(s);

s.refresh();
