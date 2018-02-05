import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {itStuffDataService} from "../data.service";
import {Question} from "../question.model";

@Component({
  selector: 'app-show-tags',
  templateUrl: './show-tags.component.html',
  styleUrls: ['./show-tags.component.css']
})
export class ShowTagsComponent implements OnInit {

  constructor(private itStuffData: itStuffDataService) { }
  questionsData: Question[];
  allTags: string[] = [];
  tagsMap: {name: string, counter: number}[] = [];
  tagsMapFinal: {name: string, counter: number}[] = [];

  @Output() clickedTag = new EventEmitter<string>();
  
  ngOnInit() {
    this.questionsData = this.itStuffData.getQuestionsData();
    for(var i = 0; i < this.questionsData.length; i++){
      this.allTags.push.apply(this.allTags, this.questionsData[i].tag);
    }
    this.allTags.sort();

    var tmpTag = this.allTags[0];
    var tmpTagCounter = 0;
    for(var i = 1; i < this.allTags.length; i++){
      if(tmpTag === this.allTags[i]){
        tmpTagCounter = tmpTagCounter + 1;
        tmpTag = this.allTags[i];
      }else{
        this.tagsMap.push({
          name : tmpTag,
          counter : tmpTagCounter
        })
        tmpTagCounter = 0;
        tmpTag = this.allTags[i];
      }      
    }

    this.tagsMapFinal = this.tagsMap.sort( (a,b) => {
      var x = a.counter;
      var y = b.counter;
      return ((x > y) ? -1 : ((x < y) ? 1 : 0))
    });
    
    for(var i = 0; this.tagsMapFinal.length > i; i++){
      console.log(this.tagsMapFinal[i]);
    }
  }

  showQuestions(tagName: string){
    this.clickedTag.emit(tagName);
  }

}
