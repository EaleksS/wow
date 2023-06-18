import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Ui } from "../Ui/Ui";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/ui", Component: Ui, key: "ui_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
