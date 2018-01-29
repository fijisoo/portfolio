import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'img/aboutme.png';

  pageName: string;

  nameGetter(data: string){
    this.pageName = data;
    
  }
}
