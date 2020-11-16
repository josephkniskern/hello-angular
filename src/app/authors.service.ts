import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  getAuthors() {
    return ['Ernest Hemingway', 'Verginia Wolf', 'Thomas Bernhard'];
  }
}
