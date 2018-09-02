/* eslint-disable no-param-reassign */

export default function distribute(s, id, take) {
  const neighbors = s.graph.getAllNeighbors(id);
  let value = Number.parseInt(s.graph.nodes(id).label, 10);

  neighbors.forEach((neighbor) => {
    let neighborsValue = Number.parseInt(s.graph.nodes(neighbor).label, 10);

    if (take) {
      neighborsValue -= 1;
      value += 1;
    } else {
      neighborsValue += 1;
      value -= 1;
    }

    s.graph.nodes(neighbor).label = neighborsValue.toString();
  });

  s.graph.nodes(id).label = value.toString();
  s.refresh();
}
