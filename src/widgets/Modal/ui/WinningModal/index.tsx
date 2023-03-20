import React, { FC } from "react";
import { createPortal } from "react-dom";
import { PlayerTypeEnum } from "@/shared/types";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "@/entities/Game";
import { Button, Circle, Cross } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { GameTypeEnum } from "@/entities/Game/types";
import { clearCells } from "@/entities/Cell";

interface Props {
  playerWinning: PlayerTypeEnum;
  setModalShown: React.Dispatch<React.SetStateAction<any>>;
}

export const WinningModal: FC<Props> = ({ playerWinning, setModalShown }) => {
  const navigate = useNavigate();
  const game = useSelector(getGame);
  const dispatch = useDispatch();

  const handleNextRound = () => {
    dispatch(clearCells());
    setModalShown(false);
  };

  return createPortal(
    <div className="h-full w-full fixed left-0 top-0 bg-black/40 flex items-center">
      <div className="w-full bg-slate-800 shadow-2xl flex flex-col gap-6 items-center py-8 justify-between">
        <h1 className="text-slate-300 uppercase tracking-widest">
          {game.gameType === GameTypeEnum.PLAYER
            ? ""
            : game.player === playerWinning
            ? "You Won!"
            : "You Lose..."}
        </h1>
        <p
          className={`text-5xl uppercase flex flex-col sm:flex-row text-center items-center gap-10 font-black ${
            playerWinning === PlayerTypeEnum.CIRCLE
              ? "text-yellow-400"
              : "text-cyan-400"
          }`}
        >
          {playerWinning === PlayerTypeEnum.CIRCLE ? (
            <span className="scale-150">
              <Circle />
            </span>
          ) : (
            <span className="scale-150">
              <Cross />
            </span>
          )}{" "}
          Takes the Round
        </p>
        <div className="flex items-center gap-4">
          <Button onClick={() => navigate("/")} className="py-3 px-8" secondary>
            Quit
          </Button>
          <Button
            onClick={() => handleNextRound()}
            className="py-3 px-8"
            yellow={playerWinning === PlayerTypeEnum.CIRCLE}
            cyan={playerWinning === PlayerTypeEnum.CROSS}
          >
            Next Round
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("overlay") as HTMLElement
  );
};
