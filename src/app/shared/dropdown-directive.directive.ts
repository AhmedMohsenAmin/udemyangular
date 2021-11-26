import {Directive, ElementRef, Input, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective  {
  @HostBinding('class.open') isOpen = false;

/* this to open and close dropdown from the button itself*/
  /*@HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }*/
/* this if you want to close dropdown from any where*/
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private eleRef:ElementRef) { }



}
