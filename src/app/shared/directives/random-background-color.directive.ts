import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() { }

  ngOnInit() {
    this.changeColor();
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.changeColor();
  }

  changeColor(){
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    this.backgroundColor = colors[Math.floor(Math.random() * 7)];
  }
}
