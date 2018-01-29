import { Directive, Input, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextAutoTyping]'
})
export class TextAutoTypingDirective implements OnInit{

  @Input('appTextAutoTyping') textToWrite: string = "";
  writeText: string = "";
  constructor(private ref: ElementRef, private renderer: Renderer2) {
  }

  elementRef = this.ref.nativeElement;

  ngOnInit(){
    console.log("TTUATAJTJAT: " + this.elementRef);

    var delayTime = 2000;
    for(var i = 0; i<this.textToWrite.length; i++){
      setTimeout(
       (
        function (s){
            return function () {
              this.writeText += s;
              console.log(this.elementRef);
            }
          }(this.textToWrite[i])
        ), delayTime)
      delayTime += 2000;
    }

  }

}
