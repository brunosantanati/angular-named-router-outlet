import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSidebarComponent } from './photos-sidebar.component';

describe('PhotosSidebarComponent', () => {
  let component: PhotosSidebarComponent;
  let fixture: ComponentFixture<PhotosSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
