import React, { FC } from "react";
import { Circle, Cross, Button, Replay } from "@/shared/ui";

export const GameHelpers: FC = () => {
  return (
    <header className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2 justify-self-start">
        <span className="text-cyan-400">
          <Cross />
        </span>
        <span className="text-yellow-400">
          <Circle />
        </span>
      </div>
      <div className="py-3 bg-slate-700 border-slate-800 text-slate-400 flex items-center justify-center rounded-xl border-b-4 font-semibold uppercase gap-2 shadow-2xl">
        <span className="scale-75">
          <Cross />
        </span>
        Turn
      </div>
      <Button className="p-3 justify-self-end" secondary>
        <span className="rotate-45">
          <Replay />
        </span>
      </Button>
    </header>
  );
};
