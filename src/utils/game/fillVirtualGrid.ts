import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export function fillVirtualGrid(gridSize: number) {
  const newVirtualGrid = [];

  for (let i = 0; i < gridSize; i++) {
    const virtualRow = [];

    for (let j = 0; j < gridSize; j++) {
      const virtualCell = 0;

      virtualRow.push(virtualCell);
    }

    newVirtualGrid.push(virtualRow);
  }

  return { grid: newVirtualGrid, obstacles: [] as SnakeTileType[] };
}

export function fillVirtualGrid2(gridSize: number) {
  const max = gridSize - 1;
  const obstacles: SnakeTileType[] = [];

  const newVirtualGrid = [];

  for (let i = 0; i < gridSize; i++) {
    const virtualRow = [];

    for (let j = 0; j < gridSize; j++) {
      let virtualCell = 0;

      if (i === 0 || i === max || j === 0 || j === max) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      }

      virtualRow.push(virtualCell);
    }

    newVirtualGrid.push(virtualRow);
  }

  return { grid: newVirtualGrid, obstacles };
}

export function fillVirtualGrid3(gridSize: number) {
  const max = gridSize - 1;
  const quarter = Math.floor(gridSize / 4);
  const count = gridSize % 4 ? quarter / 2 : quarter / 2 + 1;
  const mid = quarter * 2;

  const obstacles: SnakeTileType[] = [];
  const midValues = [];

  for (let i = mid - Math.floor(count / 2), j = 0; j < count; i++, j++) {
    midValues.push(i);
  }

  const newVirtualGrid = [];

  for (let i = 0; i < gridSize; i++) {
    const virtualRow = [];

    for (let j = 0; j < gridSize; j++) {
      let virtualCell = 0;

      if (i === 0 || i === max || j === 0 || j === max) {
        if (!midValues.includes(i) && !midValues.includes(j)) {
          virtualCell = 1;

          const obstacleCoords = {
            x: j,
            y: i,
          };
          obstacles.push(obstacleCoords);
        }
      } else if (
        i === quarter ||
        i === max - quarter ||
        j === quarter ||
        j === max - quarter
      ) {
        if (
          i >= quarter &&
          j >= quarter &&
          i <= max - quarter &&
          j <= max - quarter
        ) {
          if (!midValues.includes(i) && !midValues.includes(j)) {
            virtualCell = 1;

            const obstacleCoords = {
              x: j,
              y: i,
            };
            obstacles.push(obstacleCoords);
          }
        }
      }

      virtualRow.push(virtualCell);
    }

    newVirtualGrid.push(virtualRow);
  }

  return { grid: newVirtualGrid, obstacles };
}

export function fillVirtualGrid4(gridSize: number) {
  const max = gridSize - 1;
  const mid = [];
  const mainLineThick = gridSize % 2 ? 1 : 2;

  if (gridSize % 2) {
    mid.push(Math.floor(gridSize / 2));
  } else {
    mid.push(...[Math.floor(gridSize / 2) - 1, Math.floor(gridSize / 2)]);
  }

  const subSquareSize = (gridSize - mainLineThick) / 2;
  let subLineSize = Math.floor(subSquareSize / 3);
  subLineSize = subLineSize % 2 ? subLineSize : subLineSize + 1;
  const subSquareMid = Math.floor(subSquareSize / 2);
  const shiftedSubSquareMid = max - subSquareMid;

  const subSquareValues = [];
  const shiftedSubSquareValues = [];
  const obstacles: SnakeTileType[] = [];

  for (
    let i = 0,
      j = subSquareMid - Math.floor(subLineSize / 2),
      k = shiftedSubSquareMid - Math.floor(subLineSize / 2);
    i < subLineSize;
    i++, j++, k++
  ) {
    subSquareValues.push(j);
    shiftedSubSquareValues.push(k);
  }

  const newVirtualGrid = [];

  for (let i = 0; i < gridSize; i++) {
    const virtualRow = [];

    for (let j = 0; j < gridSize; j++) {
      let virtualCell = 0;

      if (mid.includes(i) || mid.includes(j)) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      } else if (
        (i === subSquareMid && j === subSquareMid) ||
        (i === subSquareMid && subSquareValues.includes(j)) ||
        (j === subSquareMid && subSquareValues.includes(i))
      ) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      } else if (
        (i === shiftedSubSquareMid && j === subSquareMid) ||
        (i === shiftedSubSquareMid && subSquareValues.includes(j)) ||
        (j === subSquareMid && shiftedSubSquareValues.includes(i))
      ) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      } else if (
        (i === subSquareMid && j === shiftedSubSquareMid) ||
        (i === subSquareMid && shiftedSubSquareValues.includes(j)) ||
        (j === shiftedSubSquareMid && subSquareValues.includes(i))
      ) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      } else if (
        (i === shiftedSubSquareMid && j === shiftedSubSquareMid) ||
        (i === shiftedSubSquareMid && shiftedSubSquareValues.includes(j)) ||
        (j === shiftedSubSquareMid && shiftedSubSquareValues.includes(i))
      ) {
        virtualCell = 1;

        const obstacleCoords = {
          x: j,
          y: i,
        };
        obstacles.push(obstacleCoords);
      }

      virtualRow.push(virtualCell);
    }

    newVirtualGrid.push(virtualRow);
  }

  return { grid: newVirtualGrid, obstacles };
}
