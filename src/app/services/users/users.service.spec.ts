import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService); // Add this
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  // Add tests for all() method
  describe('all', () => {
    
    it('should return a collection of users', () => {
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
      
      //spyOn == Mockito
      // spyOn(usersService, 'all').and.returnValue(userResponse);

      let response = usersService.all();

      expect(response).toEqual(userResponse);
    });
  });
});
