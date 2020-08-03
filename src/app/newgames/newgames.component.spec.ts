import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgamesComponent } from './newgames.component';

describe('NewgamesComponent', () => {
  let component: NewgamesComponent;
  let fixture: ComponentFixture<NewgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
