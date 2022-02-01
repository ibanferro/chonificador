import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonificadorComponent } from './chonificador.component';

describe('ChonificadorComponent', () => {
  let component: ChonificadorComponent;
  let fixture: ComponentFixture<ChonificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChonificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
