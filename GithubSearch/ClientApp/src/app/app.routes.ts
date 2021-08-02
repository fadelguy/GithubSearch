import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SearchComponent } from "./components/search/search.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./services/auth.guard";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, },
  { path: 'search', component: SearchComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
]
