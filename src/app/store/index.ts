import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import { cellsReducer } from "@/entities/Cell";
import { gameReducer } from "@/entities/Game";

const reducer = combineReducers({
  cells: cellsReducer,
  game: gameReducer,
});

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, PayloadAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, PayloadAction>;
