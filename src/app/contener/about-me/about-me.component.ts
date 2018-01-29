import { Component, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterContentInit{

  textToWrite: string = "ominik Beń";
  writeText: string = "D";
  constructor() {}

  ngAfterContentInit(){
    location.href = "#app-contener";
                                                              //Wypisywanie tekstu z opóźnieniem
    var delayTime = 1000;
    for(var i = 0; i<this.textToWrite.length; i++){
      setTimeout(
        (
          (s) => {
            return () => {
              this.writeText += s;
              console.log(this.writeText);
            }
          })(this.textToWrite[i])
        , delayTime)
      delayTime += 300;
    };
  }


}
