import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  @Input() singleQuestion: Question;
  @Input() counter: number;
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
    this.counter = this.counter+1;
  }



}
