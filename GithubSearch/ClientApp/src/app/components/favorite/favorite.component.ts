import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFavorite } from '../../interfaces/favorites.interface';
import { IFavoritesState } from '../../store/state/favorites.sate';
import * as FavoritesActions from '../../store/actions/favorites.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favorites: Observable<{favorites: IFavorite[]}>;

  constructor(private store: Store<{ favorites: IFavoritesState }>) { }

  ngOnInit(): void {
    this.favorites = this.store.select('favorites');
  }

  removeFavorite(id: number): void {
    this.store.dispatch(FavoritesActions.removeFavorite({ id: id }));
  }

}
