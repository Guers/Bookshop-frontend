import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';


// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
// import { BookData } from './books/book-data';
import { BookShowComponent } from './book-show/book-show.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BooksComponent,
    InscriptionComponent,
    ConnexionComponent,
    BookShowComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FileUploadModule,
    // InMemoryWebApiModule.forRoot(BookData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
