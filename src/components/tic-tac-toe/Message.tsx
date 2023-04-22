import { Player } from './utils';
import React from 'react';

type Props = {
  winner?: Player;
  tie: boolean;
  currentPlayer: Player;
};

export default function Message({ tie, winner, currentPlayer }: Props) {
  if (tie) {
    return <p className="text-2xl mt-4">Tie! Nobody won.</p>;
  }

  if (winner) {
    return <p className="text-2xl mt-4">Player {winner} has won the game!</p>;
  }

  return (
    <p className="text-center mt-2 text-lg">It's player {currentPlayer} turn</p>
  );
}
