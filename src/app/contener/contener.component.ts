import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contener',
  templateUrl: './contener.component.html',
  styleUrls: ['./contener.component.css']
})
export class ContenerComponent implements OnInit, OnChanges {

  aboutMe: boolean = false;
  coolPages: boolean = false;
  extras: boolean = false;
  favSongs: boolean = false;
  ITStuff: boolean = false;
  jsTutu: boolean = false;
  myMusic: boolean = false;
  whatILove: boolean = false;
  questionMark: boolean = false;

  @Input() getPageName: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.getPageName);
    

  }

}
