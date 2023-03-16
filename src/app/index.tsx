import React, { FC } from "react";

import { Game } from "@/widgets/Game";

export const App: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Game />
    </div>
  );
};
