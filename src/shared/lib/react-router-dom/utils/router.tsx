import { createBrowserRouter } from "react-router-dom";
import { GamePage } from "@/pages/Game";
import { MenuPage } from "@/pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);
