import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
];
