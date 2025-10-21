import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModulo } from './boton-modulo';

describe('BotonModulo', () => {
  let component: BotonModulo;
  let fixture: ComponentFixture<BotonModulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonModulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonModulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
