import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleJouranlistComponent } from './article-jouranlist.component';

describe('ArticleJouranlistComponent', () => {
  let component: ArticleJouranlistComponent;
  let fixture: ComponentFixture<ArticleJouranlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleJouranlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleJouranlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
