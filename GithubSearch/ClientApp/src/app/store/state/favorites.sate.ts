import { IFavorite } from "../../interfaces/favorites.interface";


export interface IFavoritesState {
  favorites: IFavorite[];
}
export const initialFavoritesState: IFavoritesState = {
  favorites: []
};
