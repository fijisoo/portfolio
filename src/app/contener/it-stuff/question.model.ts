export class Question {

  public question: string;
  public answer: string;
  public tag: string[];

  constructor(quest: string, answer: string, tag: string[]){
    this.question = quest;
    this.answer = answer;
    this.tag = tag;
  }
}
