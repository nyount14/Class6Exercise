import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let colors = ['green', 'purple','blue','yellow']
    this.elementRef.nativeElement.style.backgroundColor = colors[Math.floor(Math.random()*4)]
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  let colors = ['green', 'purple','blue','yellow']
  this.elementRef.nativeElement.style.backgroundColor = colors[Math.floor(Math.random()*4)]

  }
}
