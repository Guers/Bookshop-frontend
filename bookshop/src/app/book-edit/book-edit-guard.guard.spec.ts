import { TestBed } from '@angular/core/testing';

import { BookEditGuardGuard } from './book-edit-guard.guard';

describe('BookEditGuardGuard', () => {
  let guard: BookEditGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookEditGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
