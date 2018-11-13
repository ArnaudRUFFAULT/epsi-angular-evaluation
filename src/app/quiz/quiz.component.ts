import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[];
  iQuestion = 0;
  currentQuestion: Question;
  answer: string;
  found: boolean;
  hasNext = true;
  @Input()
  nbQuestions;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.nbQuestions = 10;
    this.getQuestions();
    this.found = undefined;
    this.iQuestion = 0;
    this.hasNext == true;
    this.quizService.score = 0;
  }

  getQuestions(){
    this.quizService.buildNewQuiz(this.nbQuestions).subscribe(
      questions => this.questions = questions,
      error => console.log(error)
    )
  }

  newGame() {
    this.currentQuestion = this.questions[this.iQuestion];
    this.iQuestion++;
    if (this.questions.length == this.iQuestion) {
      this.hasNext = false;
    }

  }
  loadNextQuestion() {
    this.answer = null;
    this.found = undefined;
    if (this.hasNext) {
      this.currentQuestion = this.questions[this.iQuestion];
      this.iQuestion++;
    }

    if (this.questions.length == this.iQuestion) {
      this.hasNext = false;
    }
  }

  timeSpent() {
    this.answerGiven("false");
  }

  answerGiven(answer: string) {
    this.answer = answer;
    if(this.answer == this.currentQuestion.capitale){
      this.found = true;
      this.quizService.score++
    } else {
      this.found = false;
    }
    
  }
  showAnswer() {
    return "Dommage! la réponse était " + this.currentQuestion.capitale + " !";
  }

}
