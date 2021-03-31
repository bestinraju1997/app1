import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApicallService, Users } from '../apicall.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

// tslint:disable-next-line:component-class-suffix

export class AddComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    shipping: ['free', Validators.required]
  });
  users: Users[] = [];
  user: any = {};
  // tslint:disable-next-line:typedef
  createUser(){
    this.apiService.createUsers(this.user).subscribe((res: HttpResponse<Users[]>) => {
      console.log(res);

    });
  }


  // tslint:disable-next-line:member-ordering
  email = new FormControl('', [Validators.required, Validators.email]);

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(private fb: FormBuilder, public http: HttpClient, private apiService: ApicallService) {}

  onSubmit(): void {
    alert('User added Successfully');
  }

}


