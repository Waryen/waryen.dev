import React, { useMemo } from 'react';
import { TileParams, TileValue } from './utils';

type TileProps = {
  tile: TileParams;
  onTileClick: (id: number) => void;
};

export const Tile = ({ tile, onTileClick }: TileProps) => {
  const renderTile = useMemo(() => {
    if (tile.value === TileValue.X) {
      return <span>X</span>;
    } else if (tile.value === TileValue.O) {
      return <span>O</span>;
    } else {
      return (
        <span
          className="block w-full h-full"
          onClick={() => onTileClick(tile.id)}
        ></span>
      );
    }
  }, [tile]);

  return (
    <div className="w-[50px] h-[50px] bg-white flex flex-column justify-center items-center text-black">
      {renderTile}
    </div>
  );
};
