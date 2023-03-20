import { createAsyncThunk } from "@reduxjs/toolkit";
import { CellThunkType } from "@/entities/Cell/types";
import { gameMove } from "../slices";
import { GameTypeEnum } from "@/entities/Game/types";
import { PlayerTypeEnum } from "@/shared/types";
import { RootState } from "@/app/store";
import { changePlayer } from "@/entities/Game";

export const gameMoveThunk = createAsyncThunk(
  "game/move",
  ({ cellId, player, game }: CellThunkType, thunk) => {
    thunk.dispatch(gameMove({ cellId, player }));
    if (game.gameType === GameTypeEnum.CPU) {
      const state = thunk.getState() as RootState;
      const emptyCells = state.cells.cells.filter(
        (cell) => !cell.circlePressed && !cell.crossPressed
      );
      const randomEmptyCellsId = Math.floor(Math.random() * emptyCells.length);
      thunk.dispatch(
        gameMove({
          cellId: emptyCells[randomEmptyCellsId].id,
          player:
            game.player === PlayerTypeEnum.CROSS
              ? PlayerTypeEnum.CIRCLE
              : PlayerTypeEnum.CROSS,
        })
      );
    }
    game.gameType === GameTypeEnum.PLAYER &&
      thunk.dispatch(
        changePlayer(
          game.player === PlayerTypeEnum.CROSS
            ? PlayerTypeEnum.CIRCLE
            : PlayerTypeEnum.CROSS
        )
      );
  }
);
