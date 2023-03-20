import { RootState } from "@/app/store";
import { CellType } from "../types";

export const getCells = (state: RootState): CellType[] => state.cells.cells;
