import React, { FC, useEffect, useState } from "react";
import { Circle, Cross, Radio } from "@/shared/ui";
import { useDispatch } from "react-redux";
import { changePlayer } from "@/entities/Game";
import { PlayerTypeEnum } from "@/shared/types";

export const MenuPickFigure: FC = () => {
  const [figureChoice, setFigureChoice] = useState<PlayerTypeEnum>(
    PlayerTypeEnum.CROSS
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePlayer(figureChoice));
  }, [figureChoice]);

  return (
    <div className="bg-slate-700 border-b-4 rounded-xl border-slate-800 p-4 w-96 flex flex-col items-center gap-4">
      <h1 className="text-slate-300 uppercase text-sm text-center">
        Pick Player vs Mark
      </h1>
      <div className="flex bg-slate-900 w-full p-2 rounded-md">
        <Radio
          onClick={() => setFigureChoice(PlayerTypeEnum.CROSS)}
          isActive={figureChoice === PlayerTypeEnum.CROSS}
        >
          <Cross />
        </Radio>
        <Radio
          onClick={() => setFigureChoice(PlayerTypeEnum.CIRCLE)}
          isActive={figureChoice === PlayerTypeEnum.CIRCLE}
        >
          <Circle />
        </Radio>
      </div>
      <p className="text-sm text-slate-500 uppercase">
        Mark "{figureChoice === PlayerTypeEnum.CROSS ? "X" : "O"}" goes first
      </p>
    </div>
  );
};
