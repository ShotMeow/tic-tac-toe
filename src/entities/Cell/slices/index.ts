import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cellsData } from "../data";
import { MoveType } from "@/entities/Cell/types";
import { PlayerTypeEnum } from "@/shared/types";

const cellsSlice = createSlice({
  name: "cells",
  initialState: {
    cells: cellsData,
  },
  reducers: {
    gameMove: (state, { payload }: PayloadAction<MoveType>) => {
      const current = state.cells.find((cell) => cell.id === payload.cellId);
      if (current) {
        payload.player === PlayerTypeEnum.CIRCLE
          ? (current.circlePressed = true)
          : (current.crossPressed = true);
      }
    },
    clearCells: (state) => {
      state.cells = cellsData;
    },
  },
});

export const { gameMove, clearCells } = cellsSlice.actions;
export default cellsSlice.reducer;
