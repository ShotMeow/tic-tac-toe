import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cellsData } from "../data";
import { MoveType, PlayerType } from "@/entities/Cell/types";

const cellsSlice = createSlice({
  name: "cells",
  initialState: cellsData,
  reducers: {
    gameMove: (state, { payload }: PayloadAction<MoveType>) => {
      const current = state.find((cell) => cell.id === payload.cellId);
      if (current) {
        payload.player === PlayerType.USER
          ? (current.playerPressed = true)
          : (current.cpuPressed = true);
      }
    },
  },
});

export const { gameMove } = cellsSlice.actions;
export default cellsSlice.reducer;
