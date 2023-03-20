import { RootState } from "@/app/store";

import { GameType } from "../types";

export const getGame = (state: RootState): GameType => state.game;
