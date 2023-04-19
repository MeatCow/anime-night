import { Route } from "@angular/router";
import IndexComponent from "./routes/index.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
