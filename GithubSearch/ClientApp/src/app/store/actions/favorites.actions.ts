import { createAction, props } from '@ngrx/store';
import { IFavorite } from "../../interfaces/favorites.interface";

export enum EFavoritesActions {
  RestoreFavorites = '[Favorites] Restore Favorites',
  AddFavorite = '[Favorites] Add Favorite',
  RemoveFavorite = '[Favorites] Remove Favorite',
}


export const addFavorite = createAction(
  EFavoritesActions.AddFavorite,
  props<{ favorite: IFavorite }>()
);

export const removeFavorite = createAction(
  EFavoritesActions.RemoveFavorite,
  props<{ id: number }>()
);

export const restoreFavorites = createAction(
  EFavoritesActions.RestoreFavorites,
  props<{ favorites: IFavorite[] }>()
);


