import { Component, OnInit } from '@angular/core';
import { itStuffDataService } from './data.service';
import { Question } from './question.model';

@Component({
  selector: 'app-it-stuff',
  templateUrl: './it-stuff.component.html',
  styleUrls: ['./it-stuff.component.css'],
  providers: [itStuffDataService]
})
export class ItStuffComponent implements OnInit {

  currentTagName: String;
  questionsData: Question[];

  constructor(private itStuffData: itStuffDataService) { }

  ngOnInit() {
    this.questionsData = this.itStuffData.getQuestionsData();
  }

  onClickedTag(data: string){
    this.currentTagName = data;
  }

}
