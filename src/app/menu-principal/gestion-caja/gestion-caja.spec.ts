import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCaja } from './gestion-caja';

describe('GestionCaja', () => {
  let component: GestionCaja;
  let fixture: ComponentFixture<GestionCaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCaja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
