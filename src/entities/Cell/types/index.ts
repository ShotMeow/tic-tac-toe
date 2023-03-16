export interface CellType {
  id: number;
  playerPressed: boolean;
  cpuPressed: boolean;
}

export enum PlayerType {
  USER,
  CPU,
}

export interface MoveType {
  cellId: number;
  player: PlayerType;
}
