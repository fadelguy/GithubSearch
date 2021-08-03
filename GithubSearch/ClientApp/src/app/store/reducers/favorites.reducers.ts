import { createReducer, on } from "@ngrx/store";
import { initialFavoritesState } from "../state/favorites.sate";

import * as FavoritesActions from '../actions/favorites.actions';



export const _favoritesReducer = createReducer(
  initialFavoritesState,
  on(FavoritesActions.addFavorite, (state, { favorite }) => ({ ...state, favorites: [...state.favorites, favorite] })),
  on(FavoritesActions.removeFavorite, (state, { id }) => ({ ...state, favorites: state.favorites.filter(x => x.id != id) })),
  on(FavoritesActions.restoreFavorites, (state, { favorites }) => ({ ...state, favorites })),

)

export function favoritesReducer(state, action) {
  return _favoritesReducer(state, action);
}
