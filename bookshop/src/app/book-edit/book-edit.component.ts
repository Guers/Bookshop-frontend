import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../books/book.service';
import { Book } from '../books/book';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [{ provide: DatePipe }, { provide: MessageService }]
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book;
  categories$ = this.bookService.getCategorie$;
  bookForm: FormGroup;
  sub: Subscription;
  errorMessage: string;
  uploadedFiles: any[] = [];
  upload=false;
  idBook:number;

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dataPipe: DatePipe,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.bookForm = this.fb.group({
      picture: '',
      id: { value: '', disabled: true },
      title: [{ value: '' }, Validators.required],
      author: [{ value: '' }, Validators.required],
      publicationYear: [{ value: '' }, Validators.required],
      description: [{ value: '' }],
      categoryId: '',
      categoryTitle: [{ value: '' }]

    });

    this.idBook = this.route.snapshot.params['id'];

    this.sub = this.bookService.getBook(this.idBook).subscribe({
      next: (book => {
        this.book = book;
        // console.log("dataaaaaaaaa", this.book);
        this.bookForm.patchValue({
          id: book.bookId,
          // picture:book.picture,
          title: book.title,
          author: book.author,
          publicationYear: this.dataPipe.transform(book.publicationYear, 'yyyy-MM-dd'),
          description: book.description,
          // categoryTitle:book.categoryTitle

        })
      }),
      error: err => this.errorMessage = err

    })


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save(): void {
    if (this.bookForm.valid) {
      if (this.bookForm.dirty || this.upload) {
        if (!this.bookForm.get('picture').value) {
          this.bookForm.get('picture').setValue(this.book.picture);
          // console.log("pictureeee", this.bookForm.get('picture').value);
        }

        
          this.categories$.subscribe({
            next :(categories)=>{
           if( this.bookForm.get('categoryTitle').dirty&&this.bookForm.get('categoryTitle').valid){
            this.bookForm.patchValue({
              categoryId: categories.find(c=>c.categoryTitle===this.bookForm.get('categoryTitle').value).categoryId
            })
              }else{
                this.bookForm.patchValue({
                  categoryId: this.book.bookId
                })
              }
            
              console.log("identify category id ",this.bookForm.value)
            }

          })
        

        const b = { ...this.book, ...this.bookForm.value }
        console.log("fusionnnn", b);
        this.bookService.updateBook(b).subscribe({
          next: () => this.onSaveComplete(),
          error: err => this.errorMessage = err
        })
      } else {
        this.router.navigate(['/books']);
      }
    } else {
      this.errorMessage = "Please correct the error(s).";
    }

  }

  delete():void{
    this.bookService.deleteBook(this.idBook).subscribe({
      next :  ()=>this.onSaveComplete(),
      error:err=>this.errorMessage=err
    })
  }

  onSaveComplete() {
    // To avoid CanDeactivate guard
    this.bookForm.reset();
    // console.log("resettttttt formGroup", this.bookForm);
    this.router.navigate(['/books']);


  }

  myUploader(event) {
    console.log("file", event.files[0]);
    this.bookForm.patchValue({
      picture: '../../assets/' + event.files[0].name
    })
    this.messageService.add({ severity: 'info', summary: `File ${event.files[0].name} Uploaded`, detail: '' });
    console.log("file picture formgroup", this.bookForm.get('picture'));
    this.upload=true;
  }
}



