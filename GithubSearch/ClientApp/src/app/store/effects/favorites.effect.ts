import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,  } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import * as FavoritesActions from '../actions/favorites.actions';
import { IFavoritesState } from '../state/favorites.sate';

@Injectable()
export class FavoritesEffects {


  storeFavorites = createEffect(
    () =>
      this.actions.pipe(
        ofType(FavoritesActions.addFavorite, FavoritesActions.removeFavorite),
        withLatestFrom(this.store.select('favorites')),
        tap(([action, data]) => {
          localStorage.setItem('favorites', JSON.stringify(data.favorites))
        })
      ),
    { dispatch: false }
  );


  constructor(
    private actions: Actions,
    private store: Store<{ favorites: IFavoritesState }>
  ) { }
}
