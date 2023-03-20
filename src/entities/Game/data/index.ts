import { GameType, GameTypeEnum } from "../types";
import { PlayerTypeEnum } from "@/shared/types";

export const gameData: GameType = {
  player: PlayerTypeEnum.CROSS,
  gameType: GameTypeEnum.CPU,
  score: {
    circle: 0,
    cross: 0,
    ties: 0,
  },
};
