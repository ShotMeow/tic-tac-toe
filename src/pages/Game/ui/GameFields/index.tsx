import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameMoveThunk, getCells } from "@/entities/Cell";
import { Button, Circle, Cross } from "@/shared/ui";
import { changeScore, getGame } from "@/entities/Game";
import { PlayerTypeEnum } from "@/shared/types";
import { Dispatch } from "@/app/store";
import { winChecking } from "@/pages/Game/utils/winChecking";
import { WinningModal } from "@/widgets/Modal";

export const GameFields: FC = () => {
  const cells = useSelector(getCells);
  const game = useSelector(getGame);
  const thunkDispatch = useDispatch<Dispatch>();
  const dispatch = useDispatch();
  const [winner, setWinner] = useState<PlayerTypeEnum | null>(null);

  const handleMove = (cellId: number) => {
    thunkDispatch(
      gameMoveThunk({
        cellId: cellId,
        player: game.player,
        game: game,
      })
    );
  };

  useEffect(() => {
    const winning = winChecking(cells);
    if (winning === PlayerTypeEnum.CROSS) {
      dispatch(changeScore({ crossWinning: true }));
      setWinner(PlayerTypeEnum.CROSS);
    } else if (winning === PlayerTypeEnum.CIRCLE) {
      dispatch(changeScore({ circleWinning: true }));
      setWinner(PlayerTypeEnum.CIRCLE);
    }
  }, [cells]);

  return (
    <section className="grid grid-cols-3 gap-4">
      {cells.map((cell) => (
        <Button
          onClick={() => handleMove(cell.id)}
          className={`w-20 h-20 sm:w-32 sm:h-32 ${
            cell.circlePressed
              ? "bg-yellow-500 text-white"
              : cell.crossPressed
              ? "bg-cyan-500 text-white"
              : ""
          }`}
          disabled={cell.circlePressed || cell.crossPressed}
          cell
          big
          key={cell.id}
        >
          {cell.crossPressed ? (
            <span className="scale-150">
              <Cross />
            </span>
          ) : (
            cell.circlePressed && (
              <span className="scale-150">
                <Circle />
              </span>
            )
          )}
        </Button>
      ))}
      {winner && (
        <WinningModal playerWinning={winner} setModalShown={setWinner} />
      )}
    </section>
  );
};
