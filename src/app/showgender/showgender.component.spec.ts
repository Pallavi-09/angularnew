import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgenderComponent } from './showgender.component';

describe('ShowgenderComponent', () => {
  let component: ShowgenderComponent;
  let fixture: ComponentFixture<ShowgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
