import React, { useState } from 'react';
import { defaultTiles, Player, TileValue } from './utils';
import { Tile } from './Tile';

export const Board = () => {
  const [tiles, setTiles] = useState(defaultTiles);
  const [currentPlayer, setCurrentPlayer] = useState(Player.A);

  const onTileClick = (id: number) => {
    setTiles((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            value: currentPlayer === Player.A ? TileValue.X : TileValue.O,
          };
        } else {
          return t;
        }
      });
    });
    setCurrentPlayer((prev) => (prev === Player.A ? Player.B : Player.A));
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div className="w-[150px] flex flex-wrap">
        {tiles.map((tile) => (
          <Tile tile={tile} key={tile.id} onTileClick={onTileClick} />
        ))}
      </div>
      <p>It's player {currentPlayer} turn</p>
    </div>
  );
};
