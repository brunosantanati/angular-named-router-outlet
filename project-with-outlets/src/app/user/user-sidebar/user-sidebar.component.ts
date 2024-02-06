import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSidebarComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
