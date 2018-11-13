import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output()
  timeOver = new EventEmitter<boolean>();

  countdown: number;

  traitementRegulier;

  constructor() { }

  ngOnInit() {
    this.countdown = 10;
    this.traitementRegulier = setInterval(() => {
      this.countdown -= 0.1
      this.timeUp()
    }, 100);
  }

  timeUp() {
    if (this.countdown <= 0) {
      clearInterval(this.traitementRegulier);
      this.timeOver.emit(true);     
    }
  }
}
