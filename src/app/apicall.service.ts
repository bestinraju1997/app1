import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) { }


  // tslint:disable-next-line:typedef
  getUsers() {
    return this.httpClient.get<Users[]>(this.url);

  }

  // tslint:disable-next-line:typedef
  createUsers(user: Users[]) {
    return this.httpClient.post(this.url , user).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }
}

export interface Users {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
}
