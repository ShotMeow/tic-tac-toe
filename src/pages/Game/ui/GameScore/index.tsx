import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getGame } from "@/entities/Game/selectors";

export const GameScore: FC = () => {
  const game = useSelector(getGame);

  return (
    <footer className="grid grid-cols-3 gap-4 items-center text-center">
      <div className="bg-cyan-400 rounded-xl p-1 border-b-4 border-cyan-600">
        <p className="text-sm">X (YOU)</p>
        <strong className="text-2xl">{game.score.cross}</strong>
      </div>
      <div className="bg-slate-400 rounded-xl p-1 border-b-4 border-slate-600">
        <p className="text-sm">TIES</p>
        <strong className="text-2xl">{game.score.ties}</strong>
      </div>
      <div className="bg-yellow-400 rounded-xl p-1 border-b-4 border-yellow-600">
        <p className="text-sm">O (CPU)</p>
        <strong className="text-2xl">{game.score.circle}</strong>
      </div>
    </footer>
  );
};
