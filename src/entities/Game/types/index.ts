import { PlayerTypeEnum } from "@/shared/types";

export enum GameTypeEnum {
  CPU = "cpu",
  PLAYER = "player",
}

export interface GameType {
  player: PlayerTypeEnum;
  gameType: GameTypeEnum;
  score: {
    circle: number;
    ties: number;
    cross: number;
  };
}

export interface WinType {
  circleWinning?: boolean;
  isTies?: boolean;
  crossWinning?: boolean;
}
