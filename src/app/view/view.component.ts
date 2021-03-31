import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApicallService, Users } from '../apicall.service';
import { HttpClient, HttpResponse, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: Users[] = [];
  user: any = {};


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'mobile'];

  constructor(public http: HttpClient, private apiService: ApicallService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.getUserList();
  }

  // tslint:disable-next-line:typedef
  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((data: Users[] ) => {
      console.log(data);
      this.users = data;
    });
  }
}
