import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';
import { Category, Book } from './book';
import { tap, map, catchError } from 'rxjs/operators';
import { CATEGORIES } from './category-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/books';
  constructor(private http: HttpClient) { }

  getBooks$ = this.http.get<Book[]>(this.booksUrl);

  getCategorie$ = of<Category[]>(CATEGORIES).pipe(
    tap(data => console.log(JSON.stringify(data)))

  );

  //   getBooks():Observable<Category[]>{
  //     return this.http.get<Category[]>(this.booksUrl)
  //     .pipe(
  //       // tap(data => console.log(JSON.stringify(data))),
  //     );
  // }


  getBooksCategory$ = combineLatest([
    this.getBooks$,
    this.getCategorie$
  ]).pipe(
    map(([books, categories]) => books.map(book => ({
      ...book,
      categoryName: categories?.find(c => book?.categoryId === c?.id)?.name,
    }) as Book
    )),

    // tap(data=>console.log(JSON.stringify(data)))
  );

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`
    return this.http.get<Book>(url)
      .pipe(
        map(book => ({
          ...book,
          categoryName: this.getCategoryName(book.categoryId)
        }))
      );
  }
  getCategoryName(id: number): string {
    let name: string;
    this.getCategorie$.subscribe(cat => {
      name = cat.find(c => c.id === id)?.name
      console.log("nammmme",name);
    })
    return name;
  }

  updateBook(book : Book) : Observable <Book>{
    console.log("boooookkk service",book);
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`,book,{
      headers : new HttpHeaders({
        'content-Type':'application/json'
      })}).pipe(
        tap(()=>console.log("update Book: " +book.id)),
        //Return the book on a update
        map(()=>book),

      )
  }

deleteBook(id:number):Observable<{}>{

  return this.http.delete(`${this.booksUrl}/${id}`,{
    headers : new HttpHeaders({
      'content-Type':'application/json'
    })}).pipe(
      tap(()=>console.log("delete Book: " +id))
     )
}
}

