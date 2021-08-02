import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchResult } from '../interfaces/search-result.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }


  search(query: string): Observable<ISearchResult[]> {
    return this.http.get<ISearchResult[]>(this.baseUrl + `api/search?query=${query}`);
  }

}
