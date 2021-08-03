import { Route } from "@angular/router";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { LoginComponent } from "./components/login/login.component";
import { SearchComponent } from "./components/search/search.component";
import { AuthGuard } from "./services/auth.guard";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'login', component: LoginComponent, },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] }, 
  { path: 'Favorites', component: FavoriteComponent, canActivate: [AuthGuard] },

]
