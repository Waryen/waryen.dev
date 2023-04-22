import React from 'react';
import { TileParams, TileValue } from './utils';

type TileProps = {
  tile: TileParams;
  onTileClick: (id: number) => void;
};

export const Tile = ({ tile, onTileClick }: TileProps) => {
  const renderTile = () => {
    if (tile.value === TileValue.X) {
      return <span className="text-4xl">X</span>;
    } else if (tile.value === TileValue.O) {
      return <span className="text-4xl">O</span>;
    } else {
      return (
        <span
          className="block w-full h-full"
          onClick={() => onTileClick(tile.id)}
        ></span>
      );
    }
  };

  return (
    <div className="w-[100px] h-[100px] bg-white flex flex-column justify-center items-center text-black border-[1px] border-black">
      {renderTile()}
    </div>
  );
};
