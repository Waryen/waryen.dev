export enum TileValue {
  X = 'X',
  O = 'O',
  NA = 'NA',
}

export enum Player {
  A = 'A',
  B = 'B',
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
