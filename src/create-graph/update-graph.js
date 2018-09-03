import {
  GREEN,
  HOORAY,
  RED,
} from '../constants';

export default function updateGraph(s) {
  let debtors = 0;

  s.graph.nodes().forEach((node) => {
    const value = Number.parseInt(node.label, 10);

    if (value >= 0) {
      s.graph.updateNode(node.id, { color: GREEN });
    } else {
      s.graph.updateNode(node.id, { color: RED });
      debtors += 1;
    }
  });

  if (debtors === 0) { // win condition
    s.graph.nodes().forEach((node) => {
      s.graph.updateNode(node.id, { label: node.label + HOORAY });
    });

    // delay unbind outside of current dispatch
    setTimeout(() => s.unbind('clickNode'));
  }
}
