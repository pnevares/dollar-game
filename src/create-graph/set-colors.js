import {
  GREEN,
  HOORAY,
  RED,
} from '../constants';

export default function setColors(s) {
  let reds = 0;

  s.graph.nodes().forEach((node) => {
    const value = Number.parseInt(node.label, 10);

    if (value >= 0) {
      s.graph.updateNode(node.id, { color: GREEN });
    } else {
      s.graph.updateNode(node.id, { color: RED });
      reds += 1;
    }
  });

  if (reds === 0) {
    document.getElementById('container').appendChild(
      document.createTextNode(HOORAY),
    );
  }
}
