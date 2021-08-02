import { Component, OnInit } from '@angular/core';
import { ISearchResult } from '../../interfaces/search-result.interface';
import { SearchService } from '../../services/serach.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text: string;

  results: ISearchResult[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(event) {
    this.searchService.search(event.query).subscribe(data => {
      this.results = data;
    });
  }


}
