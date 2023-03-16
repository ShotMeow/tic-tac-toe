import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { scoreData } from "../data";
import { WinType } from "../types";

const scoreSlice = createSlice({
  name: "score",
  initialState: scoreData,
  reducers: {
    changeScore: (state, { payload }: PayloadAction<WinType>) => {
      if (payload.userWinning) {
        state.user += 1;
      } else if (payload.cpuWinning) {
        state.cpu += 1;
      } else {
        state.ties += 1;
      }
    },
    clearScore: (state) => {
      state.user = 0;
      state.cpu = 0;
      state.ties = 0;
    },
  },
});

export const { changeScore, clearScore } = scoreSlice.actions;
export default scoreSlice.reducer;
