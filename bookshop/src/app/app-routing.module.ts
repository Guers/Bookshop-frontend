import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookEditGuardGuard } from './book-edit/book-edit-guard.guard';


const routes: Routes = [
  {path :'connexion', component :ConnexionComponent},
  {path :'', redirectTo : '/connexion', pathMatch:'full'},
  {path :'inscription', component :InscriptionComponent},
  {path :'books', component :BooksComponent},
  {path :'books/:id', component :BookEditComponent,canDeactivate : [BookEditGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
