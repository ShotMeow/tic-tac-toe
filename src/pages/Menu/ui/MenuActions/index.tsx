import React, { FC } from "react";
import { Button } from "@/shared/ui";
import { GameTypeEnum } from "@/entities/Game/types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeGameType } from "@/entities/Game";

export const MenuActions: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoute = (gameType: GameTypeEnum) => {
    dispatch(changeGameType(gameType));
    navigate("/game");
  };

  return (
    <div className="flex flex-col w-full gap-4 my-4">
      <Button
        onClick={() => handleRoute(GameTypeEnum.CPU)}
        className="py-3"
        yellow
      >
        New Game (VS CPU)
      </Button>
      <Button
        onClick={() => handleRoute(GameTypeEnum.PLAYER)}
        className="py-3"
        cyan
      >
        New Game (VS PLAYER)
      </Button>
    </div>
  );
};
