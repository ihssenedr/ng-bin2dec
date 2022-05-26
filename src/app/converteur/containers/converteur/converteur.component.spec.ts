import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteurComponent } from './converteur.component';

describe('ConverteurComponent', () => {
  let component: ConverteurComponent;
  let fixture: ComponentFixture<ConverteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
