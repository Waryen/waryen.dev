import React, { useCallback, useEffect, useState } from 'react';
import { checkForWinningState, defaultTiles, Player, TileValue } from './utils';
import { Tile } from './Tile';

export const Board = () => {
  const [tiles, setTiles] = useState(defaultTiles);
  const [currentPlayer, setCurrentPlayer] = useState(Player.A);
  const [winner, setWinner] = useState<Player>();

  const onTileClick = (id: number) => {
    if (winner) {
      return;
    }
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

  const updateWinner = useCallback((player: Player) => {
    setWinner(player);
  }, []);

  const resetGame = () => {
    setTiles(defaultTiles);
    setCurrentPlayer(Player.A);
    setWinner(undefined);
  };

  useEffect(() => {
    checkForWinningState(tiles, updateWinner);
  }, [tiles, updateWinner]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl md:text-2xl text-center font-bold text-red-500 mb-2">
        Tic Tac Toe
      </h2>
      <div className="w-[300px] flex flex-wrap">
        {tiles.map((tile) => (
          <Tile tile={tile} key={tile.id} onTileClick={onTileClick} />
        ))}
      </div>
      {!winner ? (
        <p className="text-center mt-2 text-lg">
          It's player {currentPlayer} turn
        </p>
      ) : (
        <p className="text-2xl mt-4">Player {winner} has won the game!</p>
      )}
      <button
        className="bg-red-600 py-2 px-4 text-lg rounded mt-8 hover:bg-red-400 focus:bg-red-400"
        onClick={resetGame}
        disabled={!winner}
      >
        Rest game
      </button>
    </div>
  );
};
