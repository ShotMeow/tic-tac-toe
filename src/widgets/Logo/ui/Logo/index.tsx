import React, { FC } from "react";
import { Circle, Cross } from "@/shared/ui";

export const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2 justify-self-start">
      <span className="text-cyan-400">
        <Cross />
      </span>
      <span className="text-yellow-400">
        <Circle />
      </span>
    </div>
  );
};
