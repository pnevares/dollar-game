import createGraph from './create-graph';
import bindHandlers from './bind-handlers';
import setColors from './set-colors';

const s = createGraph();

bindHandlers(s);
setColors(s);
s.refresh();
