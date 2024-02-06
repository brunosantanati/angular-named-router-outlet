import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { pluck, switchMap } from "rxjs/operators";

interface PhotoDetails {
  id: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrl: './photos-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosDetailsComponent implements OnInit {
  @HostBinding("class.mat-elevation-z2") hostCls = true;
  photo$!: Observable<PhotoDetails>;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.photo$ = this.activatedRoute.params.pipe(
      pluck("id"),
      switchMap((id) =>
        this.http.get<PhotoDetails>(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        )
      )
    );
  }
}
