const GRID_SIZE = 29;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 2,
    y: Math.floor(Math.random() * GRID_SIZE) + 2,
  };
}

export function outSideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE + 2 ||
    position.y < 1 ||
    position.y > GRID_SIZE + 2
  );
}
