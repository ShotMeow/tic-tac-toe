import React, { FC } from "react";

import { GameHelpers } from "../GameHelpers";
import { GameFields } from "../GameFields";
import { GameScore } from "../GameScore";

export const Game: FC = () => {
  return (
    <main className="space-y-6 mx-4">
      <GameHelpers />
      <GameFields />
      <GameScore />
    </main>
  );
};
