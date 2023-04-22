export enum TileValue {
  X = 'X',
  O = 'O',
  NA = 'NA',
}

export enum Player {
  A = 'A',
  B = 'B',
  C = 'Tie',
}

export type TileParams = {
  value: TileValue;
  id: number;
};

export const defaultTiles: TileParams[] = [
  {
    id: 0,
    value: TileValue.NA,
  },
  {
    id: 1,
    value: TileValue.NA,
  },
  {
    id: 2,
    value: TileValue.NA,
  },
  {
    id: 3,
    value: TileValue.NA,
  },
  {
    id: 4,
    value: TileValue.NA,
  },
  {
    id: 5,
    value: TileValue.NA,
  },
  {
    id: 6,
    value: TileValue.NA,
  },
  {
    id: 7,
    value: TileValue.NA,
  },
  {
    id: 8,
    value: TileValue.NA,
  },
];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

export const checkForWinningState = (
  tiles: TileParams[],
  updateWinner: (player: Player) => void,
) => {
  const amountOfFilledTiles = tiles.filter((t) => t.value !== TileValue.NA);

  if (amountOfFilledTiles.length === 9) {
    return updateWinner(Player.C);
  }

  const winner = winningCombos.find((combo) => {
    const [a, b, c] = combo;
    if (
      tiles[a].value !== TileValue.NA &&
      tiles[b].value !== TileValue.NA &&
      tiles[c].value !== TileValue.NA
    ) {
      return (
        tiles[a].value === tiles[b].value && tiles[b].value === tiles[c].value
      );
    }
  });

  if (winner) {
    const playerValue = tiles[winner[0]].value;
    const player = playerValue === TileValue.X ? Player.A : Player.B;
    updateWinner(player);
  }
};
