import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('input', ['$event'])
  onInput(event: any) {
    this.uppercase(event);
  }


  private uppercase(event: any) {

    if(event.target && event.target['name'] === "name") event.target['value'] = event.target['value'].toUpperCase();
  }

}
