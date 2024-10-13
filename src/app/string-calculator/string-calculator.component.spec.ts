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
    fixture.detectChanges(); 
  });

  it('should return 0 for an empty string', () => {
    expect(component.addNumbers("")).toBe(0);
  });
  it('should return the sum of two numbers separated by a comma', () => {
    expect(component.addNumbers("1,2")).toBe(3);
  });
  it('should handle new lines as valid separators', () => {
    expect(component.addNumbers("1\n2,3")).toBe(6);
  });
  it('should support custom delimiters', () => {
    expect(component.addNumbers("//;\n1;2")).toBe(3);
  });
  it('should throw an exception for negative numbers', () => {
    expect(() => component.addNumbers("1,-2,3,-4")).toThrow(
      new Error("Negative numbers not allowed: -2, -4")
    );
  });
  it('should handle multiple numbers', () => {
    expect(component.addNumbers("1,2,3,4,5")).toBe(15);
  });

  
});
