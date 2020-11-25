import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { Category, Book, CategoryBook } from './book';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'http://localhost:8080/books';
  private bookByIdUrl = 'http://localhost:8080/book';
  private categoriesUrl = 'http://localhost:8080/categories';
  private catBooksUrl = 'http://localhost:8080/categoriesBooks';
  private updateBookUrl = 'http://localhost:8080/updateBook';
  private deleteBookUrl = 'http://localhost:8080/delete';
  constructor(private http: HttpClient) { }

  getBooks$ = this.http.get<Book[]>(this.booksUrl);

  getCategorie$ = this.http.get<Category[]>(this.categoriesUrl);

  getBooksCategory$=this.http.get<CategoryBook[]>(this.catBooksUrl);


getBook(id: number): Observable<Book> {
  const url = `${this.bookByIdUrl}/${id}`
   return this.http.get<Book>(url)
}

  updateBook(book : Book) : Observable <Book>{
    console.log("boooookkk service",book);
    return this.http.put<Book>(`${this.updateBookUrl}`,book,{
      headers : new HttpHeaders({
        'content-Type':'application/json'
      })}).pipe(
        tap(()=>console.log("update Book: " +book)),
        //Return the book on a update
        map(()=>book),

      )
  }

deleteBook(id:number):Observable<{}>{
  console.log("iddddddd",id)

  return this.http.delete(`${this.deleteBookUrl}/${id}`,{
    headers : new HttpHeaders({
      'content-Type':'application/json'
    })}).pipe(
      tap(()=>console.log("delete Book: " +id))
     )
}
}

