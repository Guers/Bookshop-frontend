import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './book';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/books';
  constructor(private http : HttpClient) { }

  getBooks():Observable<Category>{
    return this.http.get<Category>(this.booksUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
}

}
