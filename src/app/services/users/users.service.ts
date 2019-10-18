import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  public all(): Array<object> {
    const userResponse = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        pokemon: 'Blastoise'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      }
    ];

    return userResponse;
  }
}
