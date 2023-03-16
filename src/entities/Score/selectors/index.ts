import { RootState } from "@/app/store";

import { ScoreType } from "../types";

export const getScore = (state: RootState): ScoreType => state.score;
