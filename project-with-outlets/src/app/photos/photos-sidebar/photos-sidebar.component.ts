import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Photo {
  id: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photos-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './photos-sidebar.component.html',
  styleUrl: './photos-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosSidebarComponent implements OnInit {
  photos$!: Observable<Photo[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.photos$ = this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }
}
