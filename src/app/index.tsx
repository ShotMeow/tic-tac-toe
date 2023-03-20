import React, { FC } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/lib/react-router-dom";

export const App: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
};
