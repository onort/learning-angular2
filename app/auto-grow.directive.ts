import { Directive, ElementRef, Renderer } from 'angular2/core';

// ElementRef gives access to the host element, and Renderer to modify that element.

@Directive({
  selector: '[autoGrow]', //properity in html
  host: {
    '(focus)': 'onFocus()', // binding event to method
    '(blur)': 'onBlur()'
  } 
})

export class AutoGrowDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { // Dependency Injection

  } 
  
  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
  }
  
  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
  }
}