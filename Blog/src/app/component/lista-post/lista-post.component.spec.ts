import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostsComponent } from './lista-post.component';

describe('ListaPostComponent', () => {
  let component: ListaPostsComponent;
  let fixture: ComponentFixture<ListaPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
