import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appContentBackground]'
})
export class ContentBackgroundDirective implements OnInit {
  constructor(private elmntRef: ElementRef, private renderer: Renderer2){}

  ngOnInit(){
    // this.renderer.setStyle(this.elmntRef.nativeElement, 'background-color', 'blue');
  }
  @Input () getText: string;

  pEl: any;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.pEl = this.renderer.createElement('p');
    this.renderer.setStyle(this.elmntRef.nativeElement, 'background-color', 'blue');

    pText = this.renderer.createText(this.getText);
    console.log(pText);
    this.renderer.appendChild(this.pEl, pText);
    console.log(this.pEl);
    const parent = this.elmntRef.nativeElement.parentNode;
    this.renderer.appendChild(parent, this.pEl);
    var pText = 'andrzej';
    // console.log(pText);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elmntRef.nativeElement, 'background-color', 'transparent');
    const parent = this.elmntRef.nativeElement.parentNode;
    const child = this.elmntRef.nativeElement.parentNode.lastChild;
    // let pEl = this.elmntRef.nativeElement.children;
    
    console.log(child);
    this.renderer.removeChild(parent, child);
  }
}
