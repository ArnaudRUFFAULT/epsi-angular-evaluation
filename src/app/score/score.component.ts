import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score : number;

  constructor(private quizService :QuizService) { }

  ngOnInit() {
    this.score = this.quizService.score
  }

}
