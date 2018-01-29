import {Directive, Renderer2, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[headerElClick]'
})
export class HeaderElClickDirective {
  constructor(private rndrr2: Renderer2, private elementRef: ElementRef){}
  @Input('headerElClick') toggle: string = '';
  @HostListener('click') onclick(event: Event){

    this.rndrr2.setStyle(this.elementRef.nativeElement, 'box-shadow', '0px 0px 0px 5px #f00');
    
  }


}
