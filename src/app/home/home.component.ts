import { Component, OnInit } from '@angular/core';
import { Quizz } from '../quizz';
import { DecipherComponent } from '../decipher/decipher.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'Contestar las preguntas para acceder al premio';
  public question_1 = 'Pregunta 1';
  public question_2 = 'Pregunta 2';
  public question_3 = 'Pregunta 3';
  public button_label = 'Listo!';
  public approved = false;
  public quizz = new Quizz('','','');

  private answer_1 = 'a';
  private answer_2 = 'b';
  private answer_3 = 'c';

  constructor() { }

  ngOnInit() {
  }

  // This has to be a service and needs to be done server side
  validQuizz(){
    return this.quizz.answer1 == this.answer_1 && this.quizz.answer2 == this.answer_2  && this.quizz.answer3 == this.answer_3
  }

  onSubmit(){
    console.log('On Submit');
    console.log(this.quizz);
    this.approved = this.validQuizz();
  }

  onClick(){
    console.log('On click');
  }



}
