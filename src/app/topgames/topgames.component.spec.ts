import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopgamesComponent } from './topgames.component';

describe('TopgamesComponent', () => {
  let component: TopgamesComponent;
  let fixture: ComponentFixture<TopgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
