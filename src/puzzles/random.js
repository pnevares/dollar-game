// unplayable until edges are done

export default function puzzle4() {
  let nodeCount = 20;
  // let edgeCount = 30;
  const nodes = [];
  const edges = [];

  while (nodeCount > 0) {
    const value = Math.floor(Math.random() * 8) - 4;
    const x = Math.floor(Math.random() * 150);
    const y = Math.floor(Math.random() * 100);

    nodes.push({
      id: `n${nodes.length}`,
      label: value.toString(),
      x,
      y,
      size: 1,
    });

    nodeCount -= 1;
  }

  return {
    nodes,
    edges,
  };
}
