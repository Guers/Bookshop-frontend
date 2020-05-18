import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookEditComponent } from './book-edit.component';

@Injectable({
  providedIn: 'root'
})
export class BookEditGuardGuard implements CanDeactivate<BookEditComponent> {
  canDeactivate(
    component: BookEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.bookForm.dirty){
        return confirm('Navigate away and lose all changes?');
      }
    return true;
  }
  
}
