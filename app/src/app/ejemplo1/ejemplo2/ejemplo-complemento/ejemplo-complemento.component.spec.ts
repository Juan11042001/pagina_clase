import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploComplementoComponent } from './ejemplo-complemento.component';

describe('EjemploComplementoComponent', () => {
  let component: EjemploComplementoComponent;
  let fixture: ComponentFixture<EjemploComplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploComplementoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploComplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
