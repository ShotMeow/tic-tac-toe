export interface ScoreType {
  user: number;
  ties: number;
  cpu: number;
}

export interface WinType {
  userWinning?: boolean;
  isTies?: boolean;
  cpuWinning?: boolean;
}
