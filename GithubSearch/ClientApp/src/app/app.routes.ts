import { Route } from "@angular/router";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { LoginComponent } from "./components/login/login.component";
import { SearchComponent } from "./components/search/search.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./services/auth.guard";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] }, 
  { path: 'Favorites', component: FavoriteComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
]
