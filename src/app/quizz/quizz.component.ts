import { Component, OnInit } from '@angular/core';
import { Quizz } from './shared/quizz.model';
import { DecipherComponent } from '../decipher/decipher.component';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {
  public title: String = 'Contestar las preguntas para acceder';
  public question_1: String = 'Pregunta 1';
  public question_2: String = 'Pregunta 2';
  public question_3: String = 'Pregunta 3';
  public button_label: String = 'Listo!';
  public approved: Boolean = false;
  public errors: Boolean = false;
  public error_message: String = '';
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
    if(this.validQuizz()){
      this.approved = true;
    }else{
      // display feedback error
      this.displayError('Quizz incorrecto, intenta de nuevo =(');
    }
    
  }

  displayError(errorMsg: String){
    this.errors = true;
    this.error_message = errorMsg;
    setTimeout(() => {
      this.errors = false;
    }, 5000);
  }

  onClick(){
    console.log('On click');
  }

}
