import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getScore } from "@/entities/Score";

export const GameScore: FC = () => {
  const score = useSelector(getScore);
  return (
    <footer className="grid grid-cols-3 gap-4 items-center text-center">
      <div className="bg-cyan-400 rounded-xl p-1">
        <p className="text-sm">X (YOU)</p>
        <strong className="text-2xl">{score.user}</strong>
      </div>
      <div className="bg-slate-400 rounded-xl p-1">
        <p className="text-sm">TIES</p>
        <strong className="text-2xl">{score.ties}</strong>
      </div>
      <div className="bg-yellow-400 rounded-xl p-1">
        <p className="text-sm">O (CPU)</p>
        <strong className="text-2xl">{score.cpu}</strong>
      </div>
    </footer>
  );
};
