import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng-lts/toast';
import { AutoCompleteModule } from 'primeng-lts/autocomplete';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { appRoutes } from './app.routes';
import { SearchComponent } from './components/search/search.component';
import { MessageService } from 'primeng-lts/api';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './store/reducers/favorites.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesEffects } from './store/effects/favorites.effect';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    SearchComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    ToastModule,
    TableModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5001"],
        blacklistedRoutes: []
      }
    }),
    StoreModule.forRoot({ favorites: favoritesReducer }),
    EffectsModule.forRoot([FavoritesEffects]),
  ],
  providers: [AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
