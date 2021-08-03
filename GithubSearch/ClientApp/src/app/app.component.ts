import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFavorite } from './interfaces/favorites.interface';
import { restoreFavorites } from './store/actions/favorites.actions';
import { IFavoritesState } from './store/state/favorites.sate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{ favorite: IFavoritesState }>) { }

  ngOnInit(): void {
    let favorites = localStorage.getItem('favorites');
    if (favorites != undefined) {

      this.store.dispatch(restoreFavorites({ favorites: JSON.parse(favorites) }));
    }
  }

}
