import React, { FC } from "react";
import { Button, Circle, Cross, Replay } from "@/shared/ui";
import { Logo } from "@/widgets/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGame } from "@/entities/Game";
import { PlayerTypeEnum } from "@/shared/types";

export const GameHelpers: FC = () => {
  const game = useSelector(getGame);
  const navigate = useNavigate();
  return (
    <header className="grid grid-cols-3 gap-4">
      <Logo />
      <div className="py-3 bg-slate-700 border-slate-800 text-slate-400 flex flex-col sm:flex-row items-center justify-center rounded-xl border-b-4 font-semibold uppercase sm:gap-2 shadow-2xl">
        <span className="scale-75">
          {game.player === PlayerTypeEnum.CROSS ? <Cross /> : <Circle />}
        </span>
        Turn
      </div>
      <Button
        onClick={() => navigate("/")}
        className="p-3 justify-self-end"
        secondary
      >
        <span className="rotate-45">
          <Replay />
        </span>
      </Button>
    </header>
  );
};
