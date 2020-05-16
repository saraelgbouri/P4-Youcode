import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategorieArticlesComponent } from './show-categorie-articles.component';

describe('ShowCategorieArticlesComponent', () => {
  let component: ShowCategorieArticlesComponent;
  let fixture: ComponentFixture<ShowCategorieArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCategorieArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategorieArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
