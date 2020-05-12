import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Category } from './book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  userName: string;
  displayBasic: boolean;
  booksCategorie: Category;

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
    console.log(this.userName);
    this.bookService.getBooks().subscribe(data => {

      this.booksCategorie = data;
      console.log("booooooks", data)
    });
  }

  showBasicDialog() {
    this.displayBasic = true;
    console.log("show dialog ");
  }
}
