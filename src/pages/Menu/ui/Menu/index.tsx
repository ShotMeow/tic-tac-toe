import React, { FC, useEffect } from "react";
import { Logo } from "@/widgets/Logo";
import { MenuPickFigure } from "../../ui/MenuPickFigure";
import { MenuActions } from "@/pages/Menu/ui/MenuActions";
import { useDispatch } from "react-redux";
import { clearScore } from "@/entities/Game";
import { clearCells } from "@/entities/Cell";

export const MenuPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearScore());
    dispatch(clearCells());
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Logo />
      <MenuPickFigure />
      <MenuActions />
    </div>
  );
};
