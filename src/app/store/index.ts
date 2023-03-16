import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import { cellsReducer } from "@/entities/Cell";
import { scoreReducer } from "@/entities/Score";

const reducer = combineReducers({
  cells: cellsReducer,
  score: scoreReducer,
});

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, PayloadAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, PayloadAction>;
