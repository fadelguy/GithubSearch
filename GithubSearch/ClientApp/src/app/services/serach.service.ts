import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IGithubResult } from '../interfaces/github-result.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISearchResult } from '../interfaces/search-result.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  search(query: string): Observable<ISearchResult[]> {
    return this.http.get<IGithubResult>(`https://api.github.com/search/repositories?q=${query}`).pipe(
      map(x => {

        return x.items.map(y => {
          return {
            id: y.id,
            name: y.name,
            html_url: y.html_url,
            description: y.description
          }
        })
      })
    );
  }

}
