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
    const hooray = document.createTextNode('🎉🎉🎉🎉🎉🎉');
    document.getElementById('container').appendChild(hooray);
  }
}
