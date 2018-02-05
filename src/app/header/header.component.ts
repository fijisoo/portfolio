import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showText: boolean = false;

  header_images = [
    {name: 'aboutMe', src : 'assets/img/aboutme.png'},
    // {name: 'coolPages', src : 'assets/img/coolpages.jpg'},
    {name: 'extras', src : 'assets/img/extras.jpg'},
    {name: 'favSongs', src : 'assets/img/favsongs.png'},
    {name: 'itStuff', src : 'assets/img/ITstuff.png'},
    // {name: 'jsTutu', src : 'assets/img/jsTutu.jpg'},
    {name: 'myMusic', src : 'assets/img/mymusic.jpg'},
    {name: 'whatILove', src : 'assets/img/whatilove.jpg'},
    {name: 'questionMark', src : 'https://www.shareicon.net/data/512x512/2015/11/28/678923_man_512x512.png'}
    ]

  constructor() { }

  ngOnInit() {
  }

  @Output() sharePageName = new EventEmitter<string>();
  
  clickedPage(page: string, a: any){
    console.log(a);
    this.sharePageName.emit(page);
  }
  

}
