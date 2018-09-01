import Sigma from 'sigma';

var s = new Sigma('root');
s.graph.addNode({
  id: 'n0',
  label: 'Hello',
  x: 0,
  y: 0,
  size: 1,
  color: '#f00'
}).addNode({
  id: 'n1',
  label: 'World !',
  x: 1,
  y: 1,
  size: 1,
  color: '#00f'
}).addEdge({
  id: 'e0',
  source: 'n0',
  target: 'n1'
});
s.refresh();
