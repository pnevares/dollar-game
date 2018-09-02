/* eslint-disable no-param-reassign */

export default function setColors(s) {
  s.graph.nodes().forEach((node) => {
    const value = Number.parseInt(node.label, 10);

    if (value >= 0) {
      s.graph.nodes(node.id).color = '#0f0'; // green
    } else {
      s.graph.nodes(node.id).color = '#f00'; // red
    }
  });
}
