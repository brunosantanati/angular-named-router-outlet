import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap } from "rxjs/operators";

interface UserDetails {
  id: number;
  email: string;
  name: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  @HostBinding("class.mat-elevation-z2") hostCls = true;
  user$!: Observable<UserDetails>;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      pluck("id"),
      switchMap((id) =>
        this.http.get<UserDetails>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
      )
    );
  }
}
