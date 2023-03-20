import { CellType } from "@/entities/Cell/types";
import { PlayerTypeEnum } from "@/shared/types";

export const winChecking = (cells: CellType[]) => {
  if (
    (cells[0].crossPressed && cells[1].crossPressed && cells[2].crossPressed) ||
    (cells[3].crossPressed && cells[4].crossPressed && cells[5].crossPressed) ||
    (cells[6].crossPressed && cells[7].crossPressed && cells[8].crossPressed) ||
    (cells[0].crossPressed && cells[3].crossPressed && cells[6].crossPressed) ||
    (cells[1].crossPressed && cells[4].crossPressed && cells[7].crossPressed) ||
    (cells[2].crossPressed && cells[5].crossPressed && cells[8].crossPressed) ||
    (cells[0].crossPressed && cells[4].crossPressed && cells[8].crossPressed) ||
    (cells[2].crossPressed && cells[4].crossPressed && cells[6].crossPressed)
  ) {
    return PlayerTypeEnum.CROSS;
  } else if (
    (cells[0].circlePressed &&
      cells[1].circlePressed &&
      cells[2].circlePressed) ||
    (cells[3].circlePressed &&
      cells[4].circlePressed &&
      cells[5].circlePressed) ||
    (cells[6].circlePressed &&
      cells[7].circlePressed &&
      cells[8].circlePressed) ||
    (cells[0].circlePressed &&
      cells[3].circlePressed &&
      cells[6].circlePressed) ||
    (cells[1].circlePressed &&
      cells[4].circlePressed &&
      cells[7].circlePressed) ||
    (cells[2].circlePressed &&
      cells[5].circlePressed &&
      cells[8].circlePressed) ||
    (cells[0].circlePressed &&
      cells[4].circlePressed &&
      cells[8].circlePressed) ||
    (cells[2].circlePressed && cells[4].circlePressed && cells[6].circlePressed)
  ) {
    return PlayerTypeEnum.CIRCLE;
  } else {
    return null;
  }
};
