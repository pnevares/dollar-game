export default function calculateStats(puzzle) {
  const dollars = puzzle.nodes.reduce(
    (total, node) => total + Number.parseInt(node.label, 10),
    0,
  );

  const genus = puzzle.edges.length - puzzle.nodes.length + 1;

  return {
    dollars,
    genus,
  };
}
