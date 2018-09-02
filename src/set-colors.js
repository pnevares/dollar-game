export default function setColors(s) {
  let reds = 0;

  s.graph.nodes().forEach((node) => {
    const value = Number.parseInt(node.label, 10);

    if (value >= 0) {
      s.graph.updateNode(node.id, { color: '#0f0' }); // green
    } else {
      s.graph.updateNode(node.id, { color: '#f00' }); // red
      reds += 1;
    }
  });

  if (reds === 0) {
    console.log('YOU WIN'); // eslint-disable-line no-console
  }
}
