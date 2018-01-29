import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[headerElHoverText]'
})
export class HeaderElHoverTextDirective{

  constructor(private elRef : ElementRef, private renderer : Renderer2){}

  @HostListener ('mouseenter') mouseenter (eventData :Event){
    const textEl = this.elRef.nativeElement.nextElementSibling;
    this.renderer.setStyle(textEl, 'visibility','visible');
    
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener ('mouseleave') mouseleave (event: Event){
    const textEl = this.elRef.nativeElement.nextElementSibling;
    this.renderer.setStyle(textEl, 'visibility', 'hidden');

    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

  }
}
