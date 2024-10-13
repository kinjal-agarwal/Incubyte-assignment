import { TestBed } from '@angular/core/testing';
import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StringCalculatorComponent], 
    }).compileComponents();

    const fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should return 0 for an empty string', () => {
    expect(component.addNumbers("")).toBe(0);
  });
  
});
