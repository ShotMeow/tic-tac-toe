import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerTypeEnum } from "@/shared/types";

import { GameTypeEnum, WinType } from "../types";
import { gameData } from "../data";

const gameSlice = createSlice({
  name: "score",
  initialState: gameData,
  reducers: {
    changePlayer: (state, { payload }: PayloadAction<PlayerTypeEnum>) => {
      state.player = payload;
    },
    changeGameType: (state, { payload }: PayloadAction<GameTypeEnum>) => {
      state.gameType = payload;
    },
    changeScore: (state, { payload }: PayloadAction<WinType>) => {
      if (payload.crossWinning) {
        state.score.cross += 1;
      } else if (payload.circleWinning) {
        state.score.circle += 1;
      } else {
        state.score.ties += 1;
      }
    },
    clearScore: (state) => {
      state.score.circle = 0;
      state.score.cross = 0;
      state.score.ties = 0;
    },
  },
});

export const { changeScore, clearScore, changeGameType, changePlayer } =
  gameSlice.actions;
export default gameSlice.reducer;
