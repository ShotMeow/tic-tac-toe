import { PlayerTypeEnum } from "@/shared/types";
import { GameType } from "@/entities/Game/types";

export interface CellType {
  id: number;
  circlePressed: boolean;
  crossPressed: boolean;
}
export interface MoveType {
  cellId: number;
  player: PlayerTypeEnum;
}

export interface CellThunkType extends MoveType {
  game: GameType;
}
