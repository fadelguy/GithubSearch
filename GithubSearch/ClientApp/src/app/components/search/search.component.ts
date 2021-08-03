import { Component, OnInit, OnDestroy} from '@angular/core';
import { ISearchResult } from '../../interfaces/search-result.interface';
import { SearchService } from '../../services/serach.service';
import { MessageService } from 'primeng-lts/api';
import { Store } from '@ngrx/store';
import { IFavoritesState } from '../../store/state/favorites.sate';
import * as FavoritesActions from '../../store/actions/favorites.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  result: ISearchResult;
  results: ISearchResult[];
  private subs: Subscription[] = [];

  constructor(private searchService: SearchService,
    private messageService: MessageService,
    private store: Store<{ favorites: IFavoritesState }>) { }

  ngOnInit(): void {

  }

  search(event) {
    this.subs.push(
      this.searchService.search(event.query).subscribe(data => {
        this.results = data;
      }));
  }

  selected() {
    this.store.dispatch(FavoritesActions.addFavorite({ favorite: this.result }));
    this.messageService.add({ severity: 'success', summary: 'Add to favorites', detail: this.result.name });
  }

  filter(a) {
    console.log(a)
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe);
  }
}
