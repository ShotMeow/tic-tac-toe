import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCells } from "@/entities/Cell";
import { Button } from "@/shared/ui";

export const GameFields: FC = () => {
  const cells = useSelector(getCells);
  return (
    <section className="grid grid-cols-3 gap-4">
      {cells.map((cell) => (
        <Button
          className="w-20 h-20 sm:w-32 sm:h-32"
          cell
          big
          key={cell.id}
        ></Button>
      ))}
    </section>
  );
};
