import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @ViewChild(MatPaginator) paginator:MatPaginator

  @ViewChild(MatSort)matsort:MatSort

  constructor(private http:HttpClient){
    
  }
  users:any;
  // columns=['id','name','email','phone','username','website']
  columns=['userId','id','title','body']

  ngOnInit(): void {

    // this.http.get('https://jsonplaceholder.typicode.com/users')
      this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(
      (data:any)=>{
        console.log(data);
        this.users=new MatTableDataSource(data);
        this.users.paginator=this.paginator

        this.users.sort=this.matsort
      }
    )

  }

  filter(e:any){
    this.users.filter=e.target.value
  }

}
