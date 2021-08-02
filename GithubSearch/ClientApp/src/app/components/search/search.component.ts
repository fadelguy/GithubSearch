import { Component, OnInit } from '@angular/core';
import { ISearchResult } from '../../interfaces/search-result.interface';
import { SearchService } from '../../services/serach.service';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  result: ISearchResult;

  results: ISearchResult[];

  constructor(private searchService: SearchService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  search(event) {
    this.searchService.search(event.query).subscribe(data => {
      this.results = data;
    });
  }

  selected() {
    console.log(this.result);
    this.messageService.add({ severity: 'success', summary: 'Add to favorites', detail: this.result.name });
  }
}
