import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Book } from '../books/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../books/book.service';



@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit,OnChanges {

  @Input() book : Book;
  @Input() displayDetail :boolean;
  @Output() closeDetail: EventEmitter<boolean> =new EventEmitter<boolean>()
  // title :string
  // picture :string;
  // id:number;
  // bookSelected :Book;
  errorMessage : string;
  
  constructor( private route : ActivatedRoute,private bookService : BookService) { }

  ngOnInit(): void {
  
    this.route.queryParamMap.subscribe(param=>{
      // console.log("parammmmm",param);
      this.book=JSON.parse(param.get('book')) as Book;
      // console.log("book after", this.book);
    });
    this.displayDetail = this.route.snapshot.queryParamMap.get('displayDetail') === 'true';
  }
  ngOnChanges() : void{

    // if(this.book){
      
    //     // this.title=this.book.title;
    //     // this.picture=this.book.picture;
    //     // this.id=this.book.id;
    //     this.bookSelected=this.book;
    //     console.log("show displaydetail 1 fils", this.displayDetail);
     
    // }
    

    
    // console.log("displayDetail no book",this.displayDetail);
  }

  closeDetailBook():void{

    this.displayDetail=false;
    this.closeDetail.emit(false);
    // console.log("show displaydetail 2 fils", this.displayDetail);
  }

  delete() : void{
    this.bookService.deleteBook(this.book.id).subscribe({
      next :()=>this.closeDetailBook(),
      error:err=> this.errorMessage=err
    })

  }

}
