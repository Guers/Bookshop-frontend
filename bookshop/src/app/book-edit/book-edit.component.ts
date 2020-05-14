import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { Book } from '../books/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  categories$=this.bookService.getCategorie$;


  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this.bookService.getBook(id).subscribe(book => {
    this.book = book;
    console.log("dataaaaaaaaa",this.book);
    })

    

  }

}
