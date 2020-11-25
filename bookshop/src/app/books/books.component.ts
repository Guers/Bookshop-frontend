import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Category, Book, CategoryBook } from './book';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  userName: string;
  displayDetail: boolean;
  bookSelected:Book;
  books$=this.bookService.getBooksCategory$;

  responsiveOptions;
  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.queryParamMap.get('user');    
  }

  showBasicDialog(book :Book) {
    this.displayDetail = true;
    this.bookSelected=book;
    // console.log("show dialog pere",this.displayDetail);
  }

  closeDetail(value:boolean){
    this.displayDetail=value;
  }
}
